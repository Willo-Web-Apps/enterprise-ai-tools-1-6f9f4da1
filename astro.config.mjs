import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://enterprise-ai-tools-1.onrender.com',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
