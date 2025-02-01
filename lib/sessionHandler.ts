import { v4 as uuidv4 } from "uuid";
import { cookies } from "next/headers";

export async function checkSession() {
  const cookieStore = await cookies();

  let dtcSessionId: string | undefined = cookieStore.get("dtcSessionId") as
    | string
    | undefined;

  // Generate anonymous session ID
  if (!dtcSessionId) {
    dtcSessionId = uuidv4();
  }

  console.log("dtcSessionId", dtcSessionId);
}
