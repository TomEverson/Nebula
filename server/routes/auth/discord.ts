import { Hono } from "hono";
import "dotenv/config";
import { discordAuthFetch } from "@/utils/auth";
import { DiscordAuthType } from "@/types/auth";
import { signJwt } from "@/utils/jwt";
import { setCookie } from "hono/cookie";

const discord = new Hono();

discord.post("/", async (c) => {
  const url = process.env.DISCORD_OAUTH_URL;
  return c.redirect(url, 301);
});

discord.get("/", async (c) => {
  let check: DiscordAuthType;
  const code = c.req.query("code");
  const id = process.env.DISCORD_CLIENT_ID;
  const secret = process.env.DISCORD_CLIENT_SECRET;
  const params = new URLSearchParams({
    client_id: id,
    client_secret: secret,
    grant_type: "authorization_code",
    code: code.toString(),
    redirect_uri: "http://localhost:3001/oauth/discord",
  });

  try {
    check = await discordAuthFetch({ params });
  } catch (err) {
    return c.json("Error", 404);
  }

  const payload = {
    id: check.id,
    email: check.email,
    avatar: `https://cdn.discordapp.com/avatars/${check.id}/${check.avatar}`,
  };

  const token = await signJwt(payload);

  setCookie(c, "token", token, {
    httpOnly: true,
    secure: true,
    path: "/",
    maxAge: 3600 * 24,
    sameSite: "None",
  });

  return c.redirect("http://localhost:3000/", 301);
});

export default discord;
