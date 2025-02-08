import { db } from "@/drizzle/db";
import { searchHistory } from "@/drizzle/schema";

export async function insertHistory(
  searchedDtc: string,
  results: number,
  userId: string,
  userName: string
) {
  return db.insert(searchHistory).values({
    searchedDtc: searchedDtc,
    resultsQty: results,
    userId: userId,
    userName: userName,
  });
}
