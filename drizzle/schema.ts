import {
  pgTable,
  serial,
  text,
  timestamp,
  uniqueIndex,
  varchar,
} from "drizzle-orm/pg-core";

export const UsersTable = pgTable(
  "users",
  {
    id: serial("id").primaryKey(),
    name: text("name").notNull(),
    email: text("email").notNull(),
    image: text("image").notNull(),
    createdAt: timestamp("createdAt").defaultNow().notNull(),
  },
  (users) => {
    return {
      uniqueIdx: uniqueIndex("unique_idx").on(users.email),
    };
  }
);

export const dtcList = pgTable("dtc_list", {
  id: serial("id").primaryKey(),
  dtc: varchar({ length: 10 }).notNull(),
  type: varchar({ length: 50 }),
  system: varchar({ length: 50 }),
  item: varchar({ length: 50 }),
  detail: text("detail"),
});
