import type { StorybookConfig } from '@storybook/react-vite';
import path from 'path';

const config: StorybookConfig = {
  stories: [
    '../src/**/*.stories.@(ts|tsx)',
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-links',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  async viteFinal(baseConfig) {
    baseConfig.resolve = {
      ...baseConfig.resolve,
      alias: {
        ...(baseConfig.resolve?.alias || {}),
        '@components': path.resolve(__dirname, '../../../libs/ui/src'),
      },
    };

    baseConfig.server = {
      ...baseConfig.server,
      fs: {
        allow: [
          path.resolve(__dirname, '../'),
          path.resolve(__dirname, '../../../libs/ui'),
        ],
      },
    };

    return baseConfig;
  },
};

export default config;