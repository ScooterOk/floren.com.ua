import { defineConfig } from "vite";
import vituum from "vituum";
import nunjucks from "@vituum/vite-plugin-nunjucks";
import VitePluginSvgSpritemap from "@spiriit/vite-plugin-svg-spritemap";

export default defineConfig({
  plugins: [
    VitePluginSvgSpritemap("./src/assets/icons/*.svg", {
      prefix: "icon-",
    }),
    vituum(),
    nunjucks({
      root: "./src",
    }),
  ],
});
