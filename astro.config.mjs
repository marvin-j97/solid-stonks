import { defineConfig } from 'astro/config';
import solidJs from "@astrojs/solid-js";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://marvin-j97.github.io',
  base: '/solid-stonks/gh-pages',
  integrations: [solidJs(), tailwind()]
});