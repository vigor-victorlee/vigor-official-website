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

function fmt2(n: number) {
  return String(n).padStart(2, "0");
}

function buildICS(opts: {
  startUTC: Date;
  endUTC: Date;
  summary: string;
  description: string;
  organizerEmail: string;
  attendeeEmail: string;
  attendeeName: string;
  location: string;
}) {
  const dt = (d: Date) =>
    `${d.getUTCFullYear()}${fmt2(d.getUTCMonth() + 1)}${fmt2(d.getUTCDate())}T${fmt2(d.getUTCHours())}${fmt2(d.getUTCMinutes())}00Z`;
  const stamp = dt(new Date());
  const uid = `${Date.now()}-${Math.random().toString(36).slice(2, 10)}@vigordigital.org`;
  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Vigor Digital//Booking//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:REQUEST",
    "BEGIN:VEVENT",
    `UID:${uid}`,
    `DTSTAMP:${stamp}`,
    `DTSTART:${dt(opts.startUTC)}`,
    `DTEND:${dt(opts.endUTC)}`,
    `SUMMARY:${opts.summary.replace(/\n/g, " ")}`,
    `DESCRIPTION:${opts.description.replace(/\n/g, "\\n")}`,
    `LOCATION:${opts.location}`,
    `ORGANIZER;CN=Vigor Digital:mailto:${opts.organizerEmail}`,
    `ATTENDEE;CN=${opts.attendeeName};RSVP=TRUE:mailto:${opts.attendeeEmail}`,
    "STATUS:CONFIRMED",
    "SEQUENCE:0",
    "END:VEVENT",
    "END:VCALENDAR",
  ];
  return lines.join("\r\n");
}

function slotToUTC(dateISO: string, time: string) {
  // dateISO: YYYY-MM-DD, time: HH:MM. Treat as Asia/Kuala_Lumpur (UTC+8, no DST).
  const [y, m, d] = dateISO.split("-").map(Number);
  const [h, min] = time.split(":").map(Number);
  // MYT is UTC+8: subtract 8h to get UTC
  const localMs = Date.UTC(y, m - 1, d, h, min, 0);
  return new Date(localMs - 8 * 60 * 60 * 1000);
}

export async function POST(request: Request) {
  let payload: {
    slot?: { dateISO?: string; time?: string };
    name?: string;
    email?: string;
    company?: string;
    role?: string;
    brief?: string;
    mode?: string;
  };
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const dateISO = (payload.slot?.dateISO || "").trim();
  const time = (payload.slot?.time || "").trim();
  const name = (payload.name || "").trim();
  const email = (payload.email || "").trim();
  const company = (payload.company || "").trim();
  const role = (payload.role || "").trim();
  const brief = (payload.brief || "").trim();
  const mode = payload.mode === "penang" ? "penang" : "video";

  if (!/^\d{4}-\d{2}-\d{2}$/.test(dateISO) || !/^\d{2}:\d{2}$/.test(time)) {
    return NextResponse.json({ error: "Invalid slot" }, { status: 400 });
  }
  if (!name || !company || !brief) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  const startUTC = slotToUTC(dateISO, time);
  if (startUTC.getTime() < Date.now()) {
    return NextResponse.json({ error: "Slot is in the past" }, { status: 400 });
  }
  const endUTC = new Date(startUTC.getTime() + 30 * 60 * 1000);

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn("[book] RESEND_API_KEY missing — booking not sent");
    return NextResponse.json(
      { error: "Email service not configured" },
      { status: 503 },
    );
  }

  const location =
    mode === "penang"
      ? "VIGOR HQ, SPICE Arena, Level 3A, 180 Jalan Tun Dr Awang, 11900 Relau, Penang"
      : "Google Meet (link will be shared in calendar invite)";

  const slotHuman = `${dateISO} · ${time} MYT`;
  const internalSubject = `[Vigor] New consultation booking — ${company} · ${slotHuman}`;
  const internalHtml = `
    <h2 style="font-family:system-ui,sans-serif;color:#1a1a2e">New 30-min consultation booked</h2>
    <table style="font-family:system-ui,sans-serif;font-size:14px;border-collapse:collapse">
      <tr><td style="padding:6px 12px;color:#666">When</td><td style="padding:6px 12px"><strong>${escape(slotHuman)}</strong></td></tr>
      <tr><td style="padding:6px 12px;color:#666">Mode</td><td style="padding:6px 12px">${escape(location)}</td></tr>
      <tr><td style="padding:6px 12px;color:#666">From</td><td style="padding:6px 12px"><strong>${escape(name)}</strong> · ${escape(role || "—")} @ ${escape(company)}</td></tr>
      <tr><td style="padding:6px 12px;color:#666">Email</td><td style="padding:6px 12px"><a href="mailto:${escape(email)}">${escape(email)}</a></td></tr>
      <tr><td style="padding:6px 12px;color:#666;vertical-align:top">Brief</td><td style="padding:6px 12px;white-space:pre-wrap">${escape(brief)}</td></tr>
    </table>
    <p style="font-family:system-ui,sans-serif;font-size:12px;color:#888;margin-top:24px">
      Reply directly to ${escape(email)} to confirm or reschedule.
    </p>`;

  const ics = buildICS({
    startUTC,
    endUTC,
    summary: `Vigor 30-min consultation — ${name} (${company})`,
    description: `Brief: ${brief}\\n\\nMode: ${location}`,
    organizerEmail: "victorlee@vigordigital.org",
    attendeeEmail: email,
    attendeeName: name,
    location,
  });
  const icsBase64 = Buffer.from(ics, "utf-8").toString("base64");

  const userSubject = `Confirmed: 30-min Vigor consultation · ${slotHuman}`;
  const userHtml = `
    <div style="font-family:system-ui,sans-serif;color:#1a1a2e;max-width:520px">
      <h2 style="margin:0 0 8px">Your slot is confirmed.</h2>
      <p style="color:#444;line-height:1.55">
        ${escape(slotHuman)}<br/>
        <span style="color:#666">${escape(location)}</span>
      </p>
      <p style="color:#444;line-height:1.55">
        An engineer — not a salesperson — will join the call. Bring a real problem; we&rsquo;ll architect it live.
      </p>
      <p style="color:#444;line-height:1.55">
        The .ics file attached to this email opens in Google Calendar, Outlook, or Apple Calendar.
      </p>
      <p style="color:#888;font-size:12px;margin-top:24px">
        Need to reschedule? Reply to this email — we respond within 24 hours.<br/>
        Vigor Digital Solution Sdn. Bhd. · Penang, Malaysia
      </p>
    </div>`;

  // Internal notification
  const internalRes = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: FROM,
      to: RECIPIENTS,
      reply_to: email,
      subject: internalSubject,
      html: internalHtml,
    }),
  });
  if (!internalRes.ok) {
    const detail = await internalRes.text().catch(() => "");
    console.error("[book] internal Resend error", internalRes.status, detail);
    return NextResponse.json({ error: "Failed to record booking" }, { status: 502 });
  }

  // User confirmation with .ics attachment (best-effort; non-fatal if it fails)
  await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: FROM,
      to: [email],
      reply_to: "victorlee@vigordigital.org",
      subject: userSubject,
      html: userHtml,
      attachments: [
        { filename: "vigor-consultation.ics", content: icsBase64 },
      ],
    }),
  }).catch((e) => console.warn("[book] user confirmation failed", e));

  return NextResponse.json({ ok: true });
}
