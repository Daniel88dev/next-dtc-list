"use server";

import { getTopDtcBasic } from "@/drizzle/dtc-list";
import { decreaseDtcSessionAttempts } from "@/lib/sessionHandler";

export type LoadedBasicDtcListType = {
  id: number;
  dtc: string;
  description: string | null;
};

type ResultType = {
  success: boolean;
  type?: "notFound" | "short" | "attempts" | "long" | "other";
  message?: string;
  dtcList?: LoadedBasicDtcListType[];
  attempts?: number;
};

export const loadTopDtc = async (dtc: string): Promise<ResultType> => {
  try {
    const attempts = await decreaseDtcSessionAttempts();

    if (attempts < 0) {
      return {
        success: false,
        type: "attempts",
        message: "You have reached your maximum attempts",
      };
    }

    if (dtc.length < 3) {
      return {
        success: false,
        type: "short",
        message: "DTC needs to be at least 3 characters long",
      };
    }

    if (dtc.length > 10) {
      return {
        success: false,
        type: "long",
        message: "DTC needs to be at most 10 characters long",
      };
    }

    const result = await getTopDtcBasic(dtc);

    if (result.length === 0) {
      return {
        success: false,
        type: "notFound",
        message: "No results found",
      };
    }

    const resultData: LoadedBasicDtcListType[] = result.map((dtcResult) => {
      return {
        id: dtcResult.id,
        dtc: dtcResult.dtc,
        description: dtcResult.description,
      };
    });

    return {
      success: true,
      dtcList: resultData,
      attempts: attempts,
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      type: "other",
      message: "Something went wrong",
    };
  }
};
