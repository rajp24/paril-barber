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
      SELECT id, date, time, created_at, sent
      FROM open_slots
      ORDER BY created_at DESC
      LIMIT 10
    `;
    return res.status(200).json({ success: true, slots: rows });
  } catch (err) {
    console.error('get-slots error:', err);
    return res.status(500).json({ error: err.message });
  }
};
