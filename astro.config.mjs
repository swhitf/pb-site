// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://swhitf.github.io',
  base: import.meta.env.PROD ? '/pb-site/' : '/',
  vite: {
    plugins: [tailwindcss()]
  }
});