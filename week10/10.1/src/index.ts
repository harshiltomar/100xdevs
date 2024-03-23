// Function to create Users table in Nodejs

import { Client } from "pg";

const client = new Client({
  //   host: "ep-rapid-grass-a57dq46r.us-east-2.aws.neon.tech",
  //   port: 5342,
  //   database: "Hartdraws",
  //   user: "Hartdraws_owner",
  //   password: "J4o2sntgWUEH",
  connectionString:
    "postgresql://Hartdraws_owner:J4o2sntgWUEH@ep-rapid-grass-a57dq46r.us-east-2.aws.neon.tech/Hartdraws?sslmode=require",
});

async function createUsersTable() {
  await client.connect();

  const result = await client.query(`
  CREATE TABLE users(
      id SERIAL PRIMARY KEY,
      username VARCHAR(50) UNIQUE NOT NULL,
      email VARCHAR(255) UNIQUE NOT NULL,
      password VARCHAR(255) NOT NULL,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
  )`);
  console.log(result);
}

async function insertintoUsers(
  username: string,
  email: string,
  password: string
) {
  try {
    await client.connect();
    const insertQuery =
      "INSERT INTO users (username, email, password) VALUES ('$1','$2','$3')";
    const Values = [username, email, password];

    const res = await client.query(insertQuery, Values);
    console.log("Insertion success:", res);
  } catch (err) {
    console.error("Error during the insertion", err);
  } finally {
    await client.end(); //Close the client connection
  }
}

async function findUsers(email: string) {
  try {
    await client.connect();
    const query = "SELECT * FROM users WHERE email= $1";
    const values = [email];
    const result = await client.query(query, values);

    if (result.rows.length > 0) {
      console.log("User found", result.rows[0]);
      return result.rows[0];
    } else {
      console.log("No User found with the given email");
      return null;
    }
  } catch (err) {
    console.error("Error during fetching user", err);
    throw err;
  } finally {
    await client.end();
  }
}

createUsersTable();

insertintoUsers("harshil", "harshiltomar20@gmail", "Gigachad");

findUsers("harshiltomar20@gmail");
