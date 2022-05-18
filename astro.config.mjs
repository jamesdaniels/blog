import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
	integrations: [preact()],
	optimizeDeps: { include: ['firebase/app', 'firebase/analytics', 'firebase/performance'] },
});
