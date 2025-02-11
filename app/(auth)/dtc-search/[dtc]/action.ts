import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { getDtcList } from "@/drizzle/dtc-list";
import { insertHistory } from "@/drizzle/searchHistory";

export type DtcListType = {
  id: number;
  dtc: string;
  description: string | null;
  type: string | null;
  system: string | null;
  item: string | null;
  detail: string | null;
};

type ResultType = {
  success: boolean;
  type?: "notFound" | "short" | "long";
  message?: string;
  results?: number;
  dtcList?: DtcListType[];
};

export const loadDetailedDtc = async (dtc: string): Promise<ResultType> => {
  try {
    const user = await currentUser();

    if (!user) {
      redirect("/");
    }

    const userName = user.firstName + " " + user.lastName;

    const userId = user.id;

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

    const loadedDtc = await getDtcList(dtc);

    if (loadedDtc.length === 0) {
      await insertHistory(dtc, 0, userId, userName);
      return {
        success: false,
        type: "notFound",
        message: "No results found",
      };
    }

    const dtcList: DtcListType[] = loadedDtc.map((dtcResult) => {
      return {
        id: dtcResult.id,
        dtc: dtcResult.dtc,
        description: dtcResult.description,
        type: dtcResult.type,
        system: dtcResult.system,
        item: dtcResult.item,
        detail: dtcResult.detail,
      };
    });

    await insertHistory(dtc, dtcList.length, userId, userName);

    return {
      success: true,
      dtcList: dtcList,
      results: dtcList.length,
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: "Something went wrong",
    };
  }
};
