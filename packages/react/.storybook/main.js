import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const config = {
  stories: ['../src/**/*.stories.@(ts|tsx)'],
  addons: ['@chromatic-com/storybook', '@storybook/addon-docs'],
  framework: '@storybook/react-vite',
  async viteFinal(cfg) {
    cfg.resolve = cfg.resolve || {};
    cfg.resolve.alias = {
      ...(cfg.resolve.alias || {}),
      '@libra/react': resolve(__dirname, '../src'),
      '@libra/tokens/css': resolve(__dirname, '../../tokens/src/index.css'),
    };
    return cfg;
  },
};

export default config;
