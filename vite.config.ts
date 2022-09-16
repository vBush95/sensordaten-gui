/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/sensordaten-gui/",
  plugins: [react()],
  test: {
    coverage: {
      reporter: ["text", "html"],
    },
  },
  build: {
    chunkSizeWarningLimit: 600,
  },
});
