import { defineConfig } from 'astro/config'

import solidJs from '@astrojs/solid-js'

// https://astro.build/config
export default defineConfig({
	integrations: [solidJs()],
	server: { port: 3000 },
	site: 'https://riyadh-dev.github.io',
	base: '/portfolio',
})
