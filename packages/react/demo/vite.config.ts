import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  base: '/libra/react-demo/',
  resolve: {
    alias: {
      '@libra/react': resolve(__dirname, '../src'),
      '@libra/tokens/css': resolve(__dirname, '../../tokens/src/index.css'),
    },
  },
  build: {
    outDir: resolve(__dirname, '../../docs/react-demo'),
  },
});
