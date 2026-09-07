import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "electron-vite";

export default defineConfig({
    main: {
        build: {
            outDir: "dist/main"
        }
    },
    preload: {
        build: {
            outDir: "dist/preload"
        }
    },
    renderer: {
        build: {
            outDir: "dist/renderer"
        },
        plugins: [react(), tailwindcss()]
    }
});
