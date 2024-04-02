import { Client } from "pg";

async function insertUserAndAddress(
  username: string,
  email: string,
  password: string,
  city: string,
  country: string,
  street: string,
  pincode: string
) {
  const client = new Client({
    host: "localhost",
    port: 5432,
    database: "postgres",
    user: "postgresboi",
    password: "mastwalapassword",
  });

  try {
    await client.connect();

    //Start transaction
    await client.query("BEGIN");

    //Insert User BOI
    const insertUserText = `INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING id;`;

    const userRes = await client.query(insertUserText, [
      username,
      email,
      password,
    ]);
    const userId = userRes.row[0].id;

    const insertAddressText = `INSERT INTO addresses (user_id, city, country, street, pincode)
    VALUES ($1, $2, $3, $4, $5);`;

    await client.query("COMMIT");

    console.log("User and address inserted successfully");
  } catch (err) {
    await client.query("ROLLBACK");
    console.error("Error during transaction, rolled back:", err);
    throw err;
  } finally {
    await client.end();
  }
}

// Example usage
insertUserAndAddress(
  "johndoe",
  "john.doe@example.com",
  "securepassword123",
  "New York",
  "USA",
  "123 Broadway St",
  "10001"
);
