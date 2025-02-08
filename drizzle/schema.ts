import {
  date,
  integer,
  pgTable,
  serial,
  text,
  timestamp,
  uniqueIndex,
  varchar,
} from "drizzle-orm/pg-core";

export const dtcList = pgTable("dtc_list", {
  id: serial("id").primaryKey(),
  dtc: varchar({ length: 10 }).notNull(),
  description: varchar({ length: 200 }),
  type: varchar({ length: 50 }),
  system: varchar({ length: 50 }),
  item: varchar({ length: 50 }),
  detail: text("detail"),
});

export const dtcSession = pgTable(
  "dtc_session",
  {
    id: serial("id").primaryKey(),
    sessionId: varchar("session_id").notNull(),
    attempts: integer("attempts").notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
  },
  (dtcSession) => {
    return {
      uniqueDtcId: uniqueIndex("unique_dtc_idx").on(dtcSession.sessionId),
    };
  }
);

export const searchHistory = pgTable("search_history", {
  id: serial("id").primaryKey(),
  searchedDtc: varchar("searched_dtc", { length: 10 }).notNull(),
  resultsQty: integer("results_qty").notNull(),
  userId: varchar("user_id").notNull(),
  userName: varchar("user_name").notNull(),
  createdAt: date("created_at").defaultNow().notNull(),
});
