import { sqliteTable, text } from "drizzle-orm/sqlite-core";

export const media = sqliteTable("media", {
    id: text("id")
        .primaryKey()
        .$defaultFn(() => crypto.randomUUID()),
    title: text("title").notNull()
});
