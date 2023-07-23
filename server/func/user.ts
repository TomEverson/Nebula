import { db } from "@/db";
import type { NewUser } from "@/db/schema";
import { user } from "@/db/schema";

export const getUser = async () => {
  return await db.select().from(user);
};

export const createUser = async (insertUser: NewUser) => {
  return await db.insert(user).values(insertUser);
};
