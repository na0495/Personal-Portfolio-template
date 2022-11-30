import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgLoader from "vite-svg-loader";
import svgr from "@honkhonk/vite-plugin-svgr";
import VitePluginHtmlEnv from 'vite-plugin-html-env'

// ------------------------------------

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgLoader(), svgr(), VitePluginHtmlEnv(),      VitePluginHtmlEnv({
    compiler: true
  })],
  base: "./",

});
