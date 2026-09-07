import js from "@eslint/js";
import { defineConfig, globalIgnores } from "eslint/config";
import importPlugin from "eslint-plugin-import";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import globals from "globals";
import ts from "typescript-eslint";

export default defineConfig([
    globalIgnores(["node_modules", "dist", "release", "*.yaml"]),
    js.configs.recommended,
    ts.configs.recommended,
    {
        files: ["**/*"],
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            globals: globals.node
        },
        plugins: {
            import: importPlugin
        },
        rules: {
            "import/order": [
                "warn",
                {
                    "newlines-between": "never",
                    groups: ["builtin", "external", "internal", ["parent", "sibling", "index"]],
                    alphabetize: {
                        order: "asc",
                        caseInsensitive: true
                    }
                }
            ]
        }
    },
    eslintPluginPrettierRecommended
]);
