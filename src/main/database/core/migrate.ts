import { migrate } from "drizzle-orm/better-sqlite3/migrator";
import { db } from "./client";
import { paths } from "./paths";

export const runMigrations = () => {
    migrate(db, { migrationsFolder: paths.migrationsFolder });
};
