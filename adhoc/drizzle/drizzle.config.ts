import { defineConfig } from "drizzle-kit";

//@ts-ignore
export default defineConfig({
  schema: "./src/drizzle/schema.ts",
  out: "./src/drizzle/migrations",
  //@ts-ignore
  driver: "pg",
  dbCredentials: {
    //@ts-ignore
    connectionString: process.env.DATABSE_URL as string,
  },
  verbose: true,
  strict: true,
});
