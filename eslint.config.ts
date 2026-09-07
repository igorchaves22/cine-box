import js from "@eslint/js";
import { defineConfig, globalIgnores } from "eslint/config";
import importPlugin from "eslint-plugin-import";
import jsxA11y from "eslint-plugin-jsx-a11y";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import { reactRefresh } from "eslint-plugin-react-refresh";
import globals from "globals";
import ts from "typescript-eslint";

const GLOBAL_PATH = "**/*";
const RENDERER_PATH = "src/renderer/**/*";

export default defineConfig([
    globalIgnores(["node_modules", "dist", "release", "*.yaml"]),
    js.configs.recommended,
    ts.configs.recommended,
    {
        files: [GLOBAL_PATH],
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
    {
        ignores: [RENDERER_PATH],
        files: [GLOBAL_PATH],
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            globals: globals.node
        }
    },
    {
        files: [RENDERER_PATH],
        languageOptions: {
            globals: globals.browser
        },
        plugins: {
            react,
            "react-hooks": reactHooks,
            "react-refresh": reactRefresh.plugin,
            "jsx-a11y": jsxA11y
        },
        rules: {
            ...react.configs.recommended.rules,
            ...react.configs["jsx-runtime"].rules,
            ...jsxA11y.flatConfigs.recommended.rules,
            "react-hooks/rules-of-hooks": "error",
            "react-hooks/exhaustive-deps": "warn",
            "react-refresh/only-export-components": "error"
        },
        settings: {
            react: {
                version: "detect"
            }
        }
    },
    eslintPluginPrettierRecommended
]);
