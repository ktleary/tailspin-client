import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  // PUBLIC_URL matches the CRA build_prod contract (absolute or path base).
  base: process.env.PUBLIC_URL || "/",
  build: {
    outDir: "build",
  },
  server: {
    port: 3000,
  },
  define: {
    "process.env.NODE_ENV": JSON.stringify(
      mode === "production" ? "production" : "development"
    ),
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.js",
  },
}));
