import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  root: "client",  // relative source folder
  base: "./",      // relative paths in build
  plugins: [react(), tailwindcss()],
  publicDir: "public", // relative to root (client)
  build: {
    outDir: "dist",       // relative to root (client)
    emptyOutDir: true,
    chunkSizeWarningLimit: 2000
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client/src"),
      "@shared": path.resolve(__dirname, "shared"),
      "@assets": path.resolve(__dirname, "attached_assets"),
    },
  },
});
