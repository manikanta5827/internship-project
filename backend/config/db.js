const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();
// Ensure environment variable is set
if (!process.env.DATABASE_URL) {
  throw new Error('Environment variable DATABASE_URL is not set.');
}

const connectionString = process.env.DATABASE_URL;

const pool = new Pool({
  connectionString,
});

// Event listener for successful connection
pool.connect((err) => {
  if (err) {
    console.error('Error connecting to PostgreSQL database', err.stack);
    throw err;
  }
  console.log('Connected to PostgreSQL database');
});

// Event listener for errors on the pool
pool.on('error', (err) => {
  console.error('Unexpected error on the PostgreSQL client', err);
  process.exit(-1);
});

module.exports = { pool };
