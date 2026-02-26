import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');

  return {
    // 👇 CLAVE PARA GITHUB PAGES
    base: '/web-demo-diparmamotors/',

    plugins: [react(), tailwindcss()],

    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },

    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },

    server: {
      // 👇 esto SOLO sirve para Render / dev, no molesta
      allowedHosts: ['web-demo-diparmamotors.onrender.com'],
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
