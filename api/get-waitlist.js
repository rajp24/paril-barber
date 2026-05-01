const { neon } = require('@neondatabase/serverless');
const sql = neon(process.env.DATABASE_URL);

module.exports = async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { password } = req.query;

  if (password !== process.env.ADMIN_PASSWORD) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    const rows = await sql`
      SELECT id, name, phone, joined_at
      FROM waitlist
      WHERE active = true
      ORDER BY joined_at ASC
    `;
    return res.status(200).json({ success: true, waitlist: rows });
  } catch (err) {
    console.error('get-waitlist error:', err);
    return res.status(500).json({ error: err.message });
  }
};
