import { Hono } from "hono";
import { getCookie, deleteCookie, setCookie } from "hono/cookie";

const logout = new Hono();

logout.post("/", async (c) => {
  await setCookie(c, "token", null, {
    httpOnly: true,
    secure: true,
    path: "/",
    maxAge: 0,
    sameSite: "None",
  });
  return c.json("Success", 200);
});

export default logout;
