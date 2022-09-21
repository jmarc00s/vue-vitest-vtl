import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
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
