import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgLoader from "vite-svg-loader";
import svgr from "@honkhonk/vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgLoader(), svgr()],
  base: "./",
});
