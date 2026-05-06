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

  // Default to current month if none provided
  const { month } = req.query;
  const targetMonth = month || new Date().toISOString().slice(0, 7);

  try {
    // All distinct months that have at least one blast (for dropdown)
    const monthRows = await sql`
      SELECT DISTINCT TO_CHAR(created_at, 'YYYY-MM') AS month
      FROM open_slots
      ORDER BY month DESC
    `;
    const months = monthRows.map(r => r.month);

    // Slots filtered to the target month
    const slots = await sql`
      SELECT id, date, time, created_at, sent
      FROM open_slots
      WHERE TO_CHAR(created_at, 'YYYY-MM') = ${targetMonth}
      ORDER BY created_at DESC
    `;

    return res.status(200).json({ success: true, slots, months, month: targetMonth });
  } catch (err) {
    console.error('get-slots error:', err);
    return res.status(500).json({ error: err.message });
  }
};
