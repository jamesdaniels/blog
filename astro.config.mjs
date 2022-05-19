import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import compress from "astro-compress";
import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: 'https://jamesdaniels.net',
  experimental: {
    integrations: true
  },
  integrations: [
    sitemap(),
    compress({ js: false }),
    robotsTxt()
  ],
});