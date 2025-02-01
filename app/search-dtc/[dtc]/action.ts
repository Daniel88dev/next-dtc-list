"use server";

import { getTopDtcBasic } from "@/drizzle/dtc-list";

export type LoadedBasicDtcListType = {
  id: number;
  dtc: string;
  description: string | null;
};

type ResultType = {
  success: boolean;
  type?: "notFound" | "short";
  message?: string;
  dtcList?: LoadedBasicDtcListType[];
};

export const loadTopDtc = async (dtc: string): Promise<ResultType> => {
  if (dtc.length < 3) {
    return {
      success: false,
      type: "short",
      message: "DTC needs to be at least 3 characters long",
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
  };
};
