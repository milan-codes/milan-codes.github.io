import { defineConfig } from "astro/config";

// https://astro.build/config
import svelte from "@astrojs/svelte";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import partytown from "@astrojs/partytown";
import { remarkReadingTime } from "./remark-reading-time.mjs";

// https://astro.build/config
export default defineConfig({
  integrations: [
    svelte(),
    tailwind(),
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
