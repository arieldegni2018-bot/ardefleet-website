import pool from '../src/db.js';

try {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS shipments (
      id SERIAL PRIMARY KEY,
      customer_name TEXT NOT NULL,
      pickup_location TEXT NOT NULL
    )
  `);
  console.log('Database ready: shipments table exists.');
} catch (error) {
  console.error('Could not initialize the database:', error.code ?? 'unknown', error.message);
  process.exitCode = 1;
} finally {
  await pool.end();
}
