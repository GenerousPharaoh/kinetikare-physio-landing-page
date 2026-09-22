import { NextResponse } from 'next/server';
import { z } from 'zod';

export const runtime = 'nodejs';

/**
 * Call-back requests from components/CallbackForm.tsx.
 *
 * Validates the payload, drops honeypot submissions silently, applies a
 * best-effort per-instance rate limit, and emails the request to Kareem via
 * Resend. Nothing is stored. The sender is Resend's onboarding address
 * because the domain is not verified there; it can deliver only to the
 * account owner's inbox, which is exactly where this goes.
 */

const TO = 'kareem.hassanein@gmail.com';
const FROM = 'Kinetikare Physio <onboarding@resend.dev>';
const CLINIC_PHONE = '(905) 634-6000';

const TIMES = ['Morning', 'Afternoon', 'Evening', 'Any time'] as const;
const AREAS = ['Knee', 'Hip', 'Foot or ankle', 'Back', 'Shoulder', 'Something else', 'Not sure'] as const;

const schema = z.object({
  name: z.string().trim().min(2).max(80),
  phone: z.string().trim().min(7).max(30),
  time: z.enum(TIMES).default('Any time'),
  area: z.union([z.enum(AREAS), z.literal('')]).default(''),
  source: z.string().max(40).optional().default(''),
  page: z.string().max(200).optional().default(''),
  company: z.string().max(200).optional().default(''),
});

const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, { count: number; start: number }>();

function limited(ip: string): boolean {
  const now = Date.now();
  const entry = hits.get(ip);
  if (!entry || now - entry.start > WINDOW_MS) {
    hits.set(ip, { count: 1, start: now });
    return false;
  }
  entry.count += 1;
  return entry.count > MAX_PER_WINDOW;
}

export async function POST(req: Request) {
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
  if (limited(ip)) {
    return NextResponse.json({ error: `Too many requests. Please call ${CLINIC_PHONE}.` }, { status: 429 });
  }

  let json: unknown;
  try {
    json = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  const parsed = schema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json({ error: 'Please check your name and phone number.' }, { status: 400 });
  }
  const data = parsed.data;

  // Honeypot filled: answer as if sent, send nothing.
  if (data.company) return NextResponse.json({ ok: true });

  const digits = data.phone.replace(/\D/g, '');
  if (digits.length < 10 || digits.length > 11) {
    return NextResponse.json({ error: 'Please enter a 10-digit phone number.' }, { status: 400 });
  }

  const key = process.env.RESEND_API_KEY;
  if (!key) {
    return NextResponse.json(
      { error: `Call-back requests are not available right now. Please call ${CLINIC_PHONE}.` },
      { status: 503 }
    );
  }

  const received = new Date().toLocaleString('en-CA', { timeZone: 'America/Toronto', dateStyle: 'medium', timeStyle: 'short' });
  const text = [
    'Call-back request from kinetikarephysio.com',
    '',
    `Name: ${data.name}`,
    `Phone: ${data.phone}`,
    `Best time to call: ${data.time}`,
    `What is bothering them: ${data.area || 'not given'}`,
    `Page: ${data.page || 'unknown'}${data.source ? ` (${data.source})` : ''}`,
    `Received: ${received}`,
    '',
    'Reply is by phone; no email address was collected.',
  ].join('\n');

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: FROM,
      to: [TO],
      subject: `Call-back request: ${data.name} (${data.time.toLowerCase()})`,
      text,
    }),
  });

  if (!res.ok) {
    console.error('callback: resend failed', res.status, await res.text().catch(() => ''));
    return NextResponse.json({ error: `Could not send right now. Please call ${CLINIC_PHONE}.` }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
