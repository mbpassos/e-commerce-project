import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    laravel({
      input: ['resources/css/app.css', 'resources/js/app.js'],
      refresh: true, // Ensures the page auto-refreshes in development
    }),
    tailwindcss(),
  ],
  build: {
    outDir: 'public/build', // Ensure assets are placed in public/build
    manifest: true,          // Ensure manifest.json is generated
    rollupOptions: {
      output: {
        entryFileNames: '[name].[hash].js', // Optional: Customize JS file naming
        chunkFileNames: '[name].[hash].js',  // Optional: Customize chunk naming
        assetFileNames: '[name].[hash].[ext]', // Optional: Customize asset file names
      },
    },
  },
});
