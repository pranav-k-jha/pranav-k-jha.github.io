import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Read the theme script
const themeScript = readFileSync(resolve(__dirname, 'theme-script.js'), 'utf-8');

// Create a simple plugin to inject the script into the head
const themeScriptPlugin = () => ({
  name: 'inject-theme-script',
  transformIndexHtml(html) {
    return html.replace(
      '<head>',
      `<head><script>${themeScript}</script>`
    );
  },
});

export default defineConfig({
  base: process.env.NODE_ENV === "production" ? "/" : "/",
  plugins: [
    react(),
    themeScriptPlugin()
  ],
  build: {
    outDir: "dist",
    assetsDir: "assets",
    rollupOptions: {
      input: {
        main: "./index.html",
      },
      output: {
        assetFileNames: "assets/[name].[hash][extname]",
        chunkFileNames: "assets/[name].[hash].js",
        entryFileNames: "assets/[name].[hash].js",
      },
    },
  },
  server: {
    watch: {
      usePolling: true,
    },
  },
});
