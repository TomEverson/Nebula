import type { Config } from "drizzle-kit";
import "dotenv/config";

export default {
  schema: "./db/schema.ts",
  out: "./migrations",
  driver: "turso",
  breakpoints: true,
  dbCredentials: {
    url: process.env.DATABASE_URL,
    authToken: process.env.DATABASE_AUTHTOKEN,
  },
} satisfies Config;
