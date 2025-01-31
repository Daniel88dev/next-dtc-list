"use server";

import { getTopDtcBasic } from "@/drizzle/dtc-list";

export type LoadedBasicDtcListType = {
  id: number;
  dtc: string;
  description: string | null;
};

export const loadTopDtc = async (dtc: string) => {
  if (dtc.length < 3) {
    return {
      success: false,
      message: "DTC needs to be at least 3 characters long",
    };
  }

  const result = await getTopDtcBasic(dtc);

  if (result.length === 0) {
    return {
      success: false,
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
  };
};
