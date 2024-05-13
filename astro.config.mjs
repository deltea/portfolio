import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";

import vercel from "@astrojs/vercel/static";

// https://astro.build/config
export default defineConfig({
  site: "https://deltae.vercel.app",
  integrations: [mdx(), sitemap(), tailwind(), svelte()],
  output: "static",
  adapter: vercel({ webAnalytics: true }),
  devToolbar: { enabled: false },
});
