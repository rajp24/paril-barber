const { neon } = require('@neondatabase/serverless');
const sql = neon(process.env.DATABASE_URL);
const twilio = require('twilio');

const BOOK_URL =
  'https://shops.getsquire.com/book/fade-mansion-south-plainfield/professional/paril?ig_ix=true&owner=barber';

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
      try {
        await client.messages.create({
          body,
          from: process.env.TWILIO_PHONE_NUMBER,
          to: row.phone,
        });
        sent++;
      } catch (e) {
        console.error(`Failed to send to ${row.phone}:`, e.message);
        errors.push({ phone: row.phone, error: e.message });
      }
    }

    await sql`
      INSERT INTO open_slots (date, time, sent) VALUES (${date}, ${time}, true)
    `;

    return res.status(200).json({ success: true, sent, errors });
  } catch (err) {
    console.error('send-slot-blast error:', err);
    return res.status(500).json({ error: err.message });
  }
};
