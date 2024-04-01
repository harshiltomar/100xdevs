import { Client } from "pg";

const client = new Client({
  host: "database-server url",
  port: 5334,
  database: "db name",
  user: "user name",
  password: "secret password",
});

client.connect();

const result = await client.query("SELECT * FROM USERS;");
console.log(result);

// OR
const client2 = new Client({
  connectionString: "postgresql://postgres:mysecretpassword@localhost/postgres",
});

async function createUsersTable() {
  await client2.connect();

  const result = await client2.query(
    `CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );
    `
  );
  console.log(result);
}

async function insertUserData(
  username: string,
  password: string,
  email: string
) {
  await client2.connect();
  const result = await client2.query(`
  INSERT INTO users (username, password, email)
  VALUES ('${username}', '${password}', '${email}')`);
}

createUsersTable();
insertUserData("harshil", "123", "harshil@gmail");
