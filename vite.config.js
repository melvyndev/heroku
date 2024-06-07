import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
  plugins: [
    laravel({
      input: [
        'resources/css/app.css',
        'resources/js/app.jsx',
        'resources/js/Pages/HelloWorld.jsx' // Ajoutez le chemin complet du fichier ici
      ],
      refresh: true,
    }),
  ],
  build: {
    base: '/build/',
  },
});