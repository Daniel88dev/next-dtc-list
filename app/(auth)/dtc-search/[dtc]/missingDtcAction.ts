"use server";

import { currentUser } from "@clerk/nextjs/server";
import { insertDtcNotFound } from "@/drizzle/dtcNotFound";

export const onMissingDtcSubmit = async (formData: FormData) => {
  try {
    const missingDtc = formData.get("dtcCode") as string;
    const description = formData.get("description") as string;

    const errorArray: string[] = [];
    const user = await currentUser();

    if (!user || !user.id) {
      errorArray.push("No user information found.");
    }

    const userName = user!.firstName + " " + user!.lastName;

    if (!missingDtc || missingDtc.length < 3 || missingDtc.length > 10) {
      errorArray.push("Incorrect entered DTC code.");
    }

    if (!description || description.length === 0) {
      errorArray.push("Description is required.");
    }

    if (errorArray.length > 0) {
      return { success: false, errorArray: errorArray };
    }

    await insertDtcNotFound(missingDtc, description, user!.id, userName);

    return { success: true };
  } catch (error) {
    console.error(error);
    return { success: false, errorArray: ["Something went wrong."] };
  }
};
