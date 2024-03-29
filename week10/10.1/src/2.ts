import { Client } from "pg";

const client = new Client({
  connectionString:
    "postgresql://Hartdraws_owner:J4o2sntgWUEH@ep-rapid-grass-a57dq46r.us-east-2.aws.neon.tech/Hartdraws?sslmode=require",
});

async function createDB() {
  await client.connect();

  const result = await client.query(`
  CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    )`);

  const result2 = await client.query(`
   CREATE TABLE addresses (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    city VARCHAR(100) NOT NULL,
    country VARCHAR(100) NOT NULL,
    street VARCHAR(255) NOT NULL,
    pincode VARCHAR(20),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    )`);
}

async function insertUserAndAddress(
  username: string,
  email: string,
  password: string,
  city: string,
  country: string,
  street: string,
  pincode: string
) {
  try {
    await client.connect();

    //Start
    await client.query("BEGIN");

    const insertUserText = `INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING id;`;

    const userRes = await client.query(insertUserText, [
      username,
      email,
      password,
    ]);

    const userId = userRes.rows[0].id;

    const insertAddressText = `INSERT INTO address (user_id, city, country, street, pincode) VALUES ($1, $2, $3, $4, $5)`;

    await client.query(insertAddressText, [
      userId,
      city,
      country,
      street,
      pincode,
    ]);

    await client.query("COMMIT");

    console.log("User and address inserted successfully");
  } catch (err) {
    await client.query("ROLLBACK");
    console.log("Error during transaction, rolled back", err);
    throw err;
  } finally {
    await client.end();
  }
}

insertUserAndAddress(
  "Harshil",
  "harshiltomar20",
  "pass123",
  "New York",
  "USA",
  "123",
  "1001"
);
