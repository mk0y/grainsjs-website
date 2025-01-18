// @ts-check
import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Grains.js",
      logo: {
        src: "./src/assets/grains.png",
      },
      customCss: ["./src/styles/custom.css"],
      social: {
        github: "https://github.com/withastro/starlight",
      },
      components: {
        Hero: "./src/components/Hero.astro",
      },
      sidebar: [
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Example Guide", slug: "guides/example" },
          ],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
      credits: true,
    }),
  ],

  adapter: netlify(),
});