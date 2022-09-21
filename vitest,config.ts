/// <reference types="vitest" />

import { defineConfig } from "vitest/config";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./test.setup.ts"],
    include: ["**/*(*.)?{test,spec}.{ts,js}"],
    exclude: ["node_modules", "dist", ".idea", ".git", ".cache"],
  },
});
