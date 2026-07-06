// Contact form handler.
// Sends an email via the Resend REST API when RESEND_API_KEY is configured;
// otherwise it accepts the submission and simulates a successful send so the
// form works in development. No external SDK — uses fetch directly.

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request) {
  let data;
  try {
    data = await request.json();
  } catch {
    return Response.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const { name, email, phone, message, company } = data || {};

  // Honeypot: bots fill the hidden "company" field. Silently accept and drop.
  if (company) {
    return Response.json({ ok: true });
  }

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return Response.json(
      { ok: false, error: "Please fill out all required fields." },
      { status: 400 }
    );
  }

  if (!EMAIL_RE.test(email.trim())) {
    return Response.json(
      { ok: false, error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL || "connect@goatassets.com";
  const from = process.env.CONTACT_FROM_EMAIL || "GOAT Assets <onboarding@resend.dev>";

  // Not configured yet — keep the form working without sending a real email.
  if (!apiKey) {
    console.log("[contact] RESEND_API_KEY not set — simulating send:", {
      name: name.trim(),
      email: email.trim(),
    });
    return Response.json({ ok: true, simulated: true });
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email.trim(),
        subject: `New enquiry from ${name.trim()}`,
        text: [
          `Name: ${name.trim()}`,
          `Email: ${email.trim()}`,
          `Phone: ${phone?.trim() || "—"}`,
          "",
          message.trim(),
        ].join("\n"),
      }),
    });

    if (!res.ok) {
      const detail = await res.text();
      console.error("[contact] Resend error", res.status, detail);
      return Response.json(
        {
          ok: false,
          error:
            "Something went wrong sending your message. Please email us directly at connect@goatassets.com.",
        },
        { status: 502 }
      );
    }

    return Response.json({ ok: true });
  } catch (err) {
    console.error("[contact] handler error", err);
    return Response.json(
      { ok: false, error: "Unexpected error. Please try again." },
      { status: 500 }
    );
  }
}
