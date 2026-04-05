import { randomUUID } from "crypto";

const RESEND_URL = "https://api.resend.com/emails";

type ContactPayload = {
  name?: string;
  email?: string;
  project?: string;
  website?: string;
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export const runtime = "nodejs";

export async function POST(request: Request) {
  const resendApiKey = process.env.RESEND_API_KEY;
  const contactTo = process.env.CONTACT_TO_EMAIL;
  const contactFrom = process.env.CONTACT_FROM_EMAIL;

  if (!resendApiKey || !contactTo || !contactFrom) {
    const missing = [
      !resendApiKey ? "RESEND_API_KEY" : null,
      !contactTo ? "CONTACT_TO_EMAIL" : null,
      !contactFrom ? "CONTACT_FROM_EMAIL" : null
    ].filter(Boolean);

    return Response.json(
      {
        error: `Contact form is not configured. Missing: ${missing.join(", ")}.`
      },
      { status: 500 }
    );
  }

  let body: ContactPayload;

  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const project = body.project?.trim() ?? "";
  const website = body.website?.trim() ?? "";

  if (website) {
    return Response.json({ success: true });
  }

  if (!name || !email || !project) {
    return Response.json({ error: "All fields are required." }, { status: 400 });
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return Response.json({ error: "Enter a valid email address." }, { status: 400 });
  }

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeProject = escapeHtml(project).replace(/\n/g, "<br />");

  const resendResponse = await fetch(RESEND_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
      "Idempotency-Key": randomUUID()
    },
    body: JSON.stringify({
      from: contactFrom,
      to: [contactTo],
      subject: `New portfolio inquiry from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #101012;">
          <h2 style="margin-bottom: 16px;">New Portfolio Inquiry</h2>
          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Project details:</strong></p>
          <p>${safeProject}</p>
        </div>
      `,
      text: `New Portfolio Inquiry\n\nName: ${name}\nEmail: ${email}\n\nProject details:\n${project}`,
      reply_to: email
    })
  });

  if (!resendResponse.ok) {
    const errorText = await resendResponse.text();
    return Response.json(
      {
        error: `Email delivery failed. ${errorText}`
      },
      { status: 502 }
    );
  }

  return Response.json({ success: true });
}
