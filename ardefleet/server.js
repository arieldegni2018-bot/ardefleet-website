import express from 'express';
import cors from 'cors';
import pool from './src/db.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

function databaseErrorMessage(error) {
  switch (error.code) {
    case '28P01':
    case '28000':
      return 'PostgreSQL rejected the login. Check the DATABASE_URL username and password in .env.';
    case '3D000':
      return 'The configured database does not exist. Create it in pgAdmin, then run npm run db:init.';
    case '42P01':
      return 'The shipments table does not exist. Run npm run db:init from the project folder.';
    case 'ECONNREFUSED':
    case 'ENOTFOUND':
      return 'Cannot reach PostgreSQL. Check that the database server is running and the host and port are correct.';
    default:
      return 'The database request failed. Check the backend terminal for details.';
  }
}

app.get('/api/health', async (_req, res) => {
  try {
    await pool.query('SELECT 1');
    res.json({ status: 'ok', database: 'connected' });
  } catch (error) {
    console.error('Database health check failed:', error.code ?? 'unknown', error.message);
    res.status(503).json({ status: 'error', error: databaseErrorMessage(error) });
  }
});

app.get('/api/shipments', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM shipments');
    res.json(result.rows);
  } catch (err) {
    console.error('Failed to fetch shipments:', err.code ?? 'unknown', err.message);
    res.status(500).json({ error: databaseErrorMessage(err) });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});