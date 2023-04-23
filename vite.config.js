import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 3000,
  },
  build: {
    assetsInlineLimit: 0, // This disables inlining of assets as data URLs
    assetsInclude: /\.(png|jpe?g|gif|svg)$/i, // Add this line to include your image file types
  },
});
