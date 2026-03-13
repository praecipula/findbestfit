import { sql } from "drizzle-orm";
import { integer, sqliteTable } from "drizzle-orm/sqlite-core";

export const votingSessions = sqliteTable("vote", {
  id: integer().primaryKey({ autoIncrement: true }),
  votingSessionId: integer().notNull(),
  candidateId: integer().notNull,
  userId: integer().notNull,
  voteType: integer().notNull,

  createdAt: integer({ mode: 'timestamp_ms' }).default(sql`(CURRENT_TIMESTAMP)`).notNull(),
});
