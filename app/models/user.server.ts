import { db } from "../db.server";
import { user } from "../schema";

export async function getUsers() {
  return await db.select().from(user);
}
