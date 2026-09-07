import path from "node:path";
import { app } from "electron";
import { DATABASE_FILE, DEV_DATABASE_DIR, MIGRATIONS_FOLDER } from "./constants";

const resolveDatabasePaths = () => {
    const { isPackaged } = app;

    if (isPackaged) {
        const userDataDir = app.getPath("userData");
        const { resourcesPath } = process;

        return {
            databaseFile: path.join(userDataDir, DATABASE_FILE),
            migrationsFolder: path.join(resourcesPath, MIGRATIONS_FOLDER)
        };
    }

    const cwd = process.cwd();
    const databaseDir = process.env["DATABASE_URL"] ?? DEV_DATABASE_DIR;

    return {
        databaseFile: path.resolve(cwd, databaseDir, DATABASE_FILE),
        migrationsFolder: path.join(cwd, DEV_DATABASE_DIR, MIGRATIONS_FOLDER)
    };
};

export const paths = resolveDatabasePaths();
