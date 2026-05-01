const { neon } = require('@neondatabase/serverless');
const sql = neon(process.env.DATABASE_URL);
const twilio = require('twilio');

const BOOK_URL =
  'https://shops.getsquire.com/book/fade-mansion-south-plainfield/professional/paril?ig_ix=true&owner=barber';

function normalizePhone(raw) {
  const digits = raw.replace(/\D/g, '');
  if (digits.length === 10) return `+1${digits}`;
  if (digits.length === 11 && digits.startsWith('1')) return `+${digits}`;
  return raw; // already formatted or unknown — pass through as-is
}

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { password, date, time } = req.body || {};

  if (password !== process.env.ADMIN_PASSWORD) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  if (!date || !time) {
    return res.status(400).json({ error: 'Date and time are required' });
  }

  try {
    const rows = await sql`
      SELECT id, name, phone FROM waitlist WHERE active = true
    `;

    console.log(`[blast] fetched ${rows.length} recipients from waitlist`);

    if (rows.length === 0) {
      return res.status(200).json({
        success: true, sent: 0, errors: [], total: 0,
        note: 'Waitlist is empty',
      });
    }

    const client = twilio(
      process.env.TWILIO_ACCOUNT_SID,
      process.env.TWILIO_AUTH_TOKEN
    );

    const body =
      `Hey, it's Paril 👋 A slot just opened up — ${date} at ${time}. ` +
      `First come, first served. Book it here before it's gone: ${BOOK_URL}`;

    let sent = 0;
    const errors = [];

    for (const row of rows) {
      const to = normalizePhone(row.phone);
      console.log(`[blast] sending to ${row.name} at ${to} (stored: ${row.phone})`);

      try {
        const msg = await client.messages.create({
          body,
          from: process.env.TWILIO_PHONE_NUMBER,
          to,
        });
        console.log(`[blast] ✓ sent to ${to} — SID: ${msg.sid}`);
        sent++;
      } catch (e) {
        console.error(`[blast] ✗ failed for ${to}: ${e.message} (code: ${e.code})`);
        errors.push({
          name: row.name,
          phone: to,
          stored: row.phone,
          error: e.message,
          code: e.code || null,
        });
      }
    }

    await sql`
      INSERT INTO open_slots (date, time, sent) VALUES (${date}, ${time}, true)
    `;

    console.log(`[blast] done — sent: ${sent}, errors: ${errors.length}`);
    return res.status(200).json({ success: true, sent, errors, total: rows.length });
  } catch (err) {
    console.error('[blast] outer error:', err);
    return res.status(500).json({ error: err.message });
  }
};
