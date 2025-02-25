import { defineConfig } from "astro/config";

// https://astro.build/config
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
import partytown from "@astrojs/partytown";
import { remarkReadingTime } from "./remark-reading-time.mjs";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
  markdown: {
    remarkPlugins: ["remark-math", remarkReadingTime],
    rehypePlugins: ["rehype-katex"],
  },
});
