import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

// Read the theme script
const themeScript = readFileSync(
  resolve(__dirname, "theme-script.js"),
  "utf-8"
);

// Create a simple plugin to inject the script into the head
const themeScriptPlugin = () => ({
  name: "inject-theme-script",
  transformIndexHtml(html) {
    return html.replace("<head>", `<head><script>${themeScript}</script>`);
  },
});

export default defineConfig({
  base: process.env.NODE_ENV === "production" ? "/" : "/",
  plugins: [react(), themeScriptPlugin()],
  build: {
    outDir: "dist",
    assetsDir: "assets",
    chunkSizeWarningLimit: 1000, // Increase chunk size warning limit to 1000KB
    rollupOptions: {
      input: {
        main: "./index.html",
      },
      output: {
        assetFileNames: "assets/[name].[hash][extname]",
        chunkFileNames: (chunkInfo) => {
          // Group chunks by their type
          if (chunkInfo.name === "index") {
            return "assets/[name].[hash].js";
          }
          return "assets/[name]-[hash].js";
        },
        entryFileNames: "assets/[name].[hash].js",
        manualChunks: {
          // Group React and related libraries
          react: ["react", "react-dom", "react-router-dom"],
          // Group animation libraries
          animations: ["framer-motion"],
          // Group markdown related utilities
          markdown: ["react-markdown", "remark-gfm"],
          // Group large page components
          pages: [
            "./src/pages/LLMCoursePage",
            "./src/pages/LLMFundamentalsPage",
            "./src/pages/LLMScientistPage",
            "./src/pages/LLMEngineerPage",
            "./src/pages/Projects",
            "./src/pages/ServicesPage",
            "./src/pages/ResourcePage",
            "./src/pages/ContactPage",
          ],
        },
      },
    },
  },
  server: {
    watch: {
      usePolling: true,
    },
  },
});
