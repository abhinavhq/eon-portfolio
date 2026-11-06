import { NextRequest, NextResponse } from "next/server";

// In-memory rate limiter: max 5 messages per 10 minutes per IP
const contactRateLimits = new Map<string, { count: number; resetAt: number }>();

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for") || "local-client";
    const now = Date.now();
    const limit = contactRateLimits.get(ip);

    if (limit && now < limit.resetAt && limit.count >= 5) {
      return NextResponse.json(
        {
          error:
            "Too many transmissions recorded. Please wait a few minutes before resending.",
        },
        { status: 429 }
      );
    }

    const body = await req.json();
    const { name, email, subject, message, botField } = body;

    // Honeypot spam trap
    if (botField) {
      return NextResponse.json({ success: true, message: "Transmission received." });
    }

    // Validation
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { error: "Please provide a valid name (at least 2 characters)." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 10) {
      return NextResponse.json(
        { error: "Transmission message must be at least 10 characters." },
        { status: 400 }
      );
    }

    // Update rate limit
    if (!limit || now > limit.resetAt) {
      contactRateLimits.set(ip, { count: 1, resetAt: now + 10 * 60 * 1000 });
    } else {
      limit.count += 1;
    }

    // If Resend API key is present in environment, dispatch email
    if (process.env.RESEND_API_KEY && process.env.CONTACT_NOTIFICATION_EMAIL) {
      try {
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          },
          body: JSON.stringify({
            from: "EON Portfolio <onboarding@resend.dev>",
            to: process.env.CONTACT_NOTIFICATION_EMAIL,
            subject: `[EON Transmission] ${subject || "New Message"} from ${name}`,
            text: `Sender: ${name} (${email})\n\nMessage:\n${message}`,
          }),
        });
      } catch (err) {
        console.warn("Resend email dispatch error:", err);
      }
    }

    console.log(`[Contact Form Received] Name: ${name}, Email: ${email}, Subject: ${subject}`);

    return NextResponse.json(
      {
        success: true,
        message: "Your transmission has been logged and received successfully.",
        timestamp: new Date().toISOString(),
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred during transmission dispatch." },
      { status: 500 }
    );
  }
}
