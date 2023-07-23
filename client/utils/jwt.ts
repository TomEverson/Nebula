import { jwtVerify } from "jose";
import type { UserJWT } from "../types/user";

export async function verifyJwt(user: string) {
  const key = import.meta.env.JWT_SECRET;
  const { payload } = await jwtVerify(user, new TextEncoder().encode(key));
  return payload as UserJWT;
}
