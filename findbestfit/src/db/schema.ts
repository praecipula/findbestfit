import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const usersTable = sqliteTable("users_table", {
  id: integer().primaryKey({ autoIncrement: true }),
  email: text().notNull().unique(),
  createdAt: integer({ mode: 'timestamp_ms' }).default(sql`(CURRENT_TIMESTAMP)`).notNull(),
});