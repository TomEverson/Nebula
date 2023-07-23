import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";
import "dotenv/config";
// create database connection
const connection = createClient({
  url: process.env.DATABASE_URL,
  authToken: process.env.DATABASE_AUTHTOKEN,
});

export const db = drizzle(connection);
