import "dotenv/config";
import { defineConfig } from "drizzle-kit";

const DATABASE_URL = process.env["DATABASE_URL"];

if (!DATABASE_URL) throw new Error("DATABASE_URL not defined in .env");

export default defineConfig({
    out: "src/main/database/migrations",
    schema: "src/main/database/schemas/media.ts",
    dialect: "sqlite",
    dbCredentials: {
        url: DATABASE_URL
    }
});
