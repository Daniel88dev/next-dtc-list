import { db } from "@/drizzle/db";
import { notFoundDtc } from "@/drizzle/schema";

export async function insertDtcNotFound(
  dtc: string,
  detail: string | null,
  userId: string,
  userName: string
) {
  return db
    .insert(notFoundDtc)
    .values({ dtc: dtc, detail: detail, userId: userId, userName: userName });
}
