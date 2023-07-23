import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";
import user from "@/routes/user";
import logout from "@/routes/auth/logout";
import discord from "@/routes/auth/discord";

const app = new Hono();

app.use(
  "*",
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.route("/user", user);
app.route("/oauth/discord", discord);
app.route("/oauth/logout", logout);

serve({
  fetch: app.fetch,
  port: 3001,
});
