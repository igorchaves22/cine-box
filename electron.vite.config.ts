import react from "@vitejs/plugin-react";
import { defineConfig } from "electron-vite";

export default defineConfig({
    main: {
        build: {
            outDir: "dist/main"
        }
    },
    renderer: {
        build: {
            outDir: "dist/renderer"
        },
        plugins: [react()]
    }
});
