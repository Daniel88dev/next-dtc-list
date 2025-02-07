import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { getDtcList } from "@/drizzle/dtc-list";

export type DtcListType = {
  id: number;
  dtc: string;
  description: string | null;
  type: string | null;
  system: string | null;
  item: string | null;
  detail: string | null;
};

export const loadDetailedDtc = async (dtc: string) => {
  try {
    const user = await currentUser();

    if (!user) {
      redirect("/");
    }

    if (dtc.length < 3) {
      return {
        success: false,
        type: "short",
        message: "DTC needs to be at least 3 characters long",
      };
    }

    const loadedDtc = await getDtcList(dtc);

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
