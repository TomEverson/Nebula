import { Hono } from "hono";
import { getUser } from "@/func/user";

const user = new Hono();

user.get("/", async (c) => {
  const req = await getUser();
  return c.json(req);
});

export default user;
