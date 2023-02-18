import svgr from "@honkhonk/vite-plugin-svgr";
import react from "@vitejs/plugin-react-swc";
import * as path from "path";
import { defineConfig } from "vite";
import svgLoader from "vite-svg-loader";

// ------------------------------------

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgLoader(),
    svgr(),
  ],
  base: "./",
  resolve: {
    alias: [
      {
        find: "src",
        replacement: path.resolve(__dirname, "src"),
      }
    ],
  },
});
