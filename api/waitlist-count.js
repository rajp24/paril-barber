const { sql } = require('@vercel/postgres');

module.exports = async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { rows } = await sql`
      SELECT COUNT(*) AS count FROM waitlist WHERE active = true
    `;
    return res.status(200).json({ count: parseInt(rows[0].count, 10) });
  } catch (err) {
    console.error('waitlist-count error:', err);
    return res.status(200).json({ count: 0 });
  }
};
