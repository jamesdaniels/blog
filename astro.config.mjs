import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://jamesdaniels-bea3e.web.app/',
	integrations: [sitemap(), preact()],
});
