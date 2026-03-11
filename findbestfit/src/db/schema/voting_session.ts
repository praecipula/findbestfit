import { sql } from "drizzle-orm";
import { integer, sqliteTable } from "drizzle-orm/sqlite-core";

export const votingSessions = sqliteTable("voting_sessions", {
  id: integer().primaryKey({ autoIncrement: true }),
  scenarioId: integer().notNull(),
  createdAt: integer({ mode: 'timestamp_ms' }).default(sql`(CURRENT_TIMESTAMP)`).notNull(),
  finalizedAt: integer({ mode: 'timestamp_ms' }),
});
