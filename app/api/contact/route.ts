import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { name, email, subject, message } = data || {};
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const host = process.env.SMTP_HOST;
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const port = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 587;
    const secure = process.env.SMTP_SECURE === 'true';

    if (!host || !user || !pass) {
      return NextResponse.json({ error: 'SMTP not configured on server' }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: { user, pass },
    });

    const to = process.env.CONTACT_TO_EMAIL || user;

    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to,
      subject: subject || `Portfolio contact from ${name}`,
      text: message,
      html: `<p>${message.replace(/\n/g, '<br/>')}</p><p>Reply to: <a href=\"mailto:${email}\">${email}</a></p>`,
    });

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    return NextResponse.json({ error: 'Failed to send email', detail: String(err) }, { status: 500 });
  }
}
