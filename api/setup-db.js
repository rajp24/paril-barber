const { sql } = require('@vercel/postgres');

module.exports = async function handler(req, res) {
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS waitlist (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        phone TEXT NOT NULL,
        joined_at TIMESTAMP DEFAULT NOW(),
        active BOOLEAN DEFAULT TRUE
      )
    `;

    await sql`
      CREATE TABLE IF NOT EXISTS open_slots (
        id SERIAL PRIMARY KEY,
        date TEXT,
        time TEXT,
        created_at TIMESTAMP DEFAULT NOW(),
        sent BOOLEAN DEFAULT FALSE
      )
    `;

    return res.status(200).json({ success: true, message: 'Tables created successfully' });
  } catch (err) {
    console.error('setup-db error:', err);
    return res.status(500).json({ success: false, error: err.message });
  }
};
