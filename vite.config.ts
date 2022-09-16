/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/sensordaten-gui/sensordaten",
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
