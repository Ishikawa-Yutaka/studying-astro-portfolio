// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import icon from "astro-icon";

// 環境に応じて設定を変更
const isDev = process.env.NODE_ENV === "development";

// https://astro.build/config
export default defineConfig({
  site: isDev ? "http://localhost:4323" : "https://your-username.github.io",
  base: isDev ? "/" : "/studying-astro-portfolio/",
  integrations: [mdx(), sitemap(), icon()],
});
