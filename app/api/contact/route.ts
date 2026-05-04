import { NextResponse } from "next/server";

export const runtime = "nodejs";

const RECIPIENTS = ["victorlee@vigordigital.org", "info@vigordigital.org"];
const FROM = process.env.CONTACT_FROM || "Vigor Website <onboarding@resend.dev>";

const escape = (s: string) =>
  String(s ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

export async function POST(request: Request) {
  let payload: Record<string, string>;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const app = (payload.app || "").trim();
  const budget = (payload.budget || "").trim();
  const timeline = (payload.timeline || "").trim();
  const email = (payload.email || "").trim();
  const message = (payload.message || "").trim();

  if (!app || !budget || !timeline || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Missing or invalid fields" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn("[contact] RESEND_API_KEY not set — email not sent");
    return NextResponse.json(
      { error: "Email service not configured" },
      { status: 503 },
    );
  }

  const subject = `New project inquiry — ${app}`;
  const html = `
    <h2 style="font-family:system-ui,sans-serif;color:#1a1a2e">New project inquiry</h2>
    <table style="font-family:system-ui,sans-serif;font-size:14px;border-collapse:collapse">
      <tr><td style="padding:6px 12px;color:#666">From</td><td style="padding:6px 12px"><strong>${escape(email)}</strong></td></tr>
      <tr><td style="padding:6px 12px;color:#666">Project type</td><td style="padding:6px 12px">${escape(app)}</td></tr>
      <tr><td style="padding:6px 12px;color:#666">Budget</td><td style="padding:6px 12px">${escape(budget)}</td></tr>
      <tr><td style="padding:6px 12px;color:#666">Timeline</td><td style="padding:6px 12px">${escape(timeline)}</td></tr>
      ${message ? `<tr><td style="padding:6px 12px;color:#666;vertical-align:top">Message</td><td style="padding:6px 12px;white-space:pre-wrap">${escape(message)}</td></tr>` : ""}
    </table>
    <p style="font-family:system-ui,sans-serif;font-size:12px;color:#888;margin-top:24px">
      Sent from vigordigital.org · reply directly to ${escape(email)}
    </p>`;

  const text = `New project inquiry

From: ${email}
Project type: ${app}
Budget: ${budget}
Timeline: ${timeline}
${message ? `\nMessage:\n${message}\n` : ""}`;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: FROM,
      to: RECIPIENTS,
      reply_to: email,
      subject,
      html,
      text,
    }),
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    console.error("[contact] Resend error", res.status, detail);
    return NextResponse.json({ error: "Failed to send email" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
