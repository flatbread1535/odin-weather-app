import { defineConfig } from "eslint/config";
import js from "@eslint/js";

export default defineConfig([
  {
    files: ["**/*.js"],
    languageOptions: {
      globals: {
        console: "readonly",
        window: "readonly",
        document: "readonly",
        fetch: "readonly",
        process: "readonly",
      },
    },
    plugins: {
      js,
    },
    extends: ["js/recommended"],
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "warn",
    },
  },
]);
