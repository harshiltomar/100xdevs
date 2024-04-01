const { Client } = require("pg");

const connectionString =
  "postgresql://postgres:passwordvro@localhost:5432/postgres";

const client = new Client({
  connectionString: connectionString,
});

client.connect((err) => {
  if (err) {
    console.error("connection error", err.stack);
  } else {
    console.log("connected to the database");
  }
});

client.query("SELECT NOW()", (err, res) => {
  if (err) {
    console.error(err);
  } else {
    console.log(res.rows[0]);
  }

  client.end();
});
