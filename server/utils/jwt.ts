import { SignJWT, jwtVerify, type JWTPayload } from "jose";
import "dotenv/config";

export async function signJwt(payload): Promise<string> {
  const key = process.env.JWT_SECRET;
  const iat = Math.floor(Date.now() / 1000);
  const exp = iat + 60 * 60 * 24;

  const token = new SignJWT({ ...payload })
    .setProtectedHeader({ alg: "HS256", typ: "JWT" })
    .setExpirationTime(exp)
    .setIssuedAt(iat)
    .setNotBefore(iat)
    .sign(new TextEncoder().encode(key));
  return token;
}

export async function verifyJwt(user) {
  const key = process.env.JWT_SECRET;
  const { payload } = await jwtVerify(user, new TextEncoder().encode(key));
  return payload;
}
