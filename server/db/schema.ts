import { sqliteTable, int, text } from "drizzle-orm/sqlite-core";
import { InferModel } from "drizzle-orm";

export const user = sqliteTable("user", {
  id: text("id", { length: 191 }).primaryKey().notNull().unique(),
  avatar: text("avatar", { length: 64 }).notNull(),
  password: text("password", { length: 36 }),
});

export type NewUser = InferModel<typeof user>;
