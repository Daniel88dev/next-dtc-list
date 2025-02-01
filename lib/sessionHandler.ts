"use server";

import { v4 as uuidv4 } from "uuid";
import { cookies } from "next/headers";
import {
  createDtcSession,
  getDtcSessionData,
  updateDtcSession,
} from "@/drizzle/dtcSession";

export async function checkDtcSession() {
  const cookieStore = await cookies();

  let dtcSessionId: string | undefined = cookieStore.get("dtcSessionId") as
    | string
    | undefined;

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
