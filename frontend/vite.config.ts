import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/",
  server: {
    port: 3000,
    open: true,
    hmr: true,
    host: "0.0.0.0",
    cors: true,
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "@/styles/helpers/index.scss" as *;

        `,
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
