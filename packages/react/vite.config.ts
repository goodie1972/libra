import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es', 'cjs'],
      fileName: (format) => format === 'es' ? 'index.js' : 'index.cjs',
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'clsx', 'tailwind-merge'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          clsx: 'clsx',
          'tailwind-merge': 'tailwindMerge',
        },
      },
    },
  },
});
