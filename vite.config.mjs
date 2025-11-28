// vite.config.mjs
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './',                // <- makes asset URLs relative (fixes MIME/404->HTML problem)
  plugins: [react()],
  server: { port: 5173 }
});
