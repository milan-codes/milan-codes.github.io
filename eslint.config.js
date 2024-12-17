import eslintPluginAstro from "eslint-plugin-astro";
import tseslint from "typescript-eslint";
import astroEslintParser from "astro-eslint-parser";
import globals from "globals";
import js from "@eslint/js";
import typescriptParser from "@typescript-eslint/parser";
export default [
  js.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  ...tseslint.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  {
    files: ["**/*.astro"],
    languageOptions: {
      parser: astroEslintParser,
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
    },
  },
  {
    files: ["**/*.{js,jsx,astro}"],
    rules: {
      "no-mixed-spaces-and-tabs": ["error", "smart-tabs"],
    },
  },
  {
    files: ["**/*.{ts,tsx}", "**/*.astro/*.js"],
    languageOptions: {
      parser: typescriptParser,
    },
  },
  {
    ignores: [".astro/**", "dist/**"],
  },
];
