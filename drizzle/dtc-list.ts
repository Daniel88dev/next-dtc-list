import { db } from "@/drizzle/db";
import { dtcList } from "@/drizzle/schema";
import { like } from "drizzle-orm";

export async function getTopDtcBasic(dtc: string) {
  return db
    .select({
      id: dtcList.id,
      dtc: dtcList.dtc,
      description: dtcList.description,
    })
    .from(dtcList)
    .where(like(dtcList.dtc, `%${dtc}%`))
    .limit(10);
}

export async function getDtcList(dtc: string) {
  return db
    .select({
      id: dtcList.id,
      dtc: dtcList.dtc,
      description: dtcList.description,
      type: dtcList.type,
      system: dtcList.system,
      item: dtcList.item,
      detail: dtcList.detail,
    })
    .from(dtcList)
    .where(like(dtcList.dtc, `%${dtc}%`));
}
