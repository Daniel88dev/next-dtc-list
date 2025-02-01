import { db } from "@/drizzle/db";
import { dtcSession } from "@/drizzle/schema";
import { eq } from "drizzle-orm";

export async function createDtcSession(sessionId: string) {
  return db.insert(dtcSession).values({ sessionId: sessionId, attempts: 5 });
}

export async function getDtcSessionData(sessionId: string) {
  return db
    .select({
      sessionId: dtcSession.sessionId,
      attempts: dtcSession.attempts,
      updatedAt: dtcSession.updatedAt,
    })
    .from(dtcSession)
    .where(eq(dtcSession.sessionId, sessionId));
}

export async function updateDtcSession(sessionId: string, attempts: number) {
  return db
    .update(dtcSession)
    .set({ attempts: attempts, updatedAt: new Date() })
    .where(eq(dtcSession.sessionId, sessionId));
}
