import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: 'https://odildev10.github.io/prueba_mipriv'
});

// PACKAGE
// "predeploy": "npm run build",
// "deploy": "gh-pages -d dist"
