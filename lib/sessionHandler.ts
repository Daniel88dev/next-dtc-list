"use server";

import { v4 as uuidv4 } from "uuid";
import { cookies } from "next/headers";
import {
  createDtcSession,
  getDtcSessionData,
  updateDtcSession,
} from "@/drizzle/dtcSession";

// I know this logic isn't perfect. And its very easy to delete created session from browser.
// But i wanted at least somehow limit unauthenticated user, to search dtc codes.

export async function checkDtcSession() {
  const cookieStore = await cookies();

  let dtcSessionId = cookieStore.get("dtcSessionId")?.value;

  if (!dtcSessionId) {
    dtcSessionId = uuidv4();
  }

  let session = await getDtcSessionData(dtcSessionId);

  if (!session) {
    await createDtcSession(dtcSessionId);
    session = await getDtcSessionData(dtcSessionId);
  }

  if (session.updatedAt.getDay() !== new Date().getDay()) {
    await updateDtcSession(dtcSessionId, 5);
  }

  (await cookies()).set("dtcSessionId", dtcSessionId, {
    secure: process.env.NODE_ENV === "production",
    httpOnly: true,
    path: "/",
    maxAge: 60 * 60 * 24 * 10,
  });
}

export async function decreaseDtcSessionAttempts() {
  const cookieStore = await cookies();

  const dtcSessionId = cookieStore.get("dtcSessionId")?.value;

  if (!dtcSessionId) {
    throw new Error("No dtcSessionId found in cookies");
  }

  const session = await getDtcSessionData(dtcSessionId);

  if (!session) {
    throw new Error("No session found for dtcSessionId");
  }

  const attempts = session.attempts - 1;

  await updateDtcSession(dtcSessionId, attempts);

  return attempts;
}
