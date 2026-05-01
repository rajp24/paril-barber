const { sql } = require('@vercel/postgres');

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { password, id } = req.body || {};

  if (password !== process.env.ADMIN_PASSWORD) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  if (!id) {
    return res.status(400).json({ error: 'ID is required' });
  }

  try {
    await sql`UPDATE waitlist SET active = false WHERE id = ${id}`;
    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('remove-from-waitlist error:', err);
    return res.status(500).json({ error: err.message });
  }
};
