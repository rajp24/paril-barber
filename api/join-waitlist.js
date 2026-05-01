const { sql } = require('@vercel/postgres');

function formatPhone(raw) {
  const digits = raw.replace(/\D/g, '');
  if (digits.length === 10) return `+1${digits}`;
  if (digits.length === 11 && digits.startsWith('1')) return `+${digits}`;
  return null;
}

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, phone } = req.body || {};

  if (!name || !name.trim()) {
    return res.status(400).json({ error: 'Name is required' });
  }
  if (!phone || !phone.trim()) {
    return res.status(400).json({ error: 'Phone number is required' });
  }

  const formatted = formatPhone(phone);
  if (!formatted) {
    return res.status(400).json({ error: 'Enter a valid 10-digit US phone number' });
  }

  try {
    await sql`
      INSERT INTO waitlist (name, phone) VALUES (${name.trim()}, ${formatted})
    `;

    const { rows } = await sql`
      SELECT COUNT(*) AS count FROM waitlist WHERE active = true
    `;

    return res.status(200).json({
      success: true,
      position: parseInt(rows[0].count, 10),
    });
  } catch (err) {
    console.error('join-waitlist error:', err);
    return res.status(500).json({ error: err.message });
  }
};
