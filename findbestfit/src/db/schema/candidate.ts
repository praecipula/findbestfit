import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const candidates = sqliteTable("candidates", {
    id: integer().primaryKey({ autoIncrement: true }),
    // Creator of this candidate
    creatorId: integer().notNull(),
    // Must not be null.
    name: text().notNull(),
    // Null OK
    description: text(),
    //Nullable is important - means "not trashed"
    trashedAt: integer({mode: 'timestamp_ms'}),
    createdAt: integer({ mode: 'timestamp_ms' }).default(sql`(CURRENT_TIMESTAMP)`).notNull(),
});
