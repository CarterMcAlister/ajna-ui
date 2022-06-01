const path = require('path')

module.exports = {
  stories: [
    '../../../packages/**/*.stories.mdx',
    '../../../packages/**/*.stories.tsx',
  ],
  // addons: [
  //   '@storybook/addon-links',
  //   '@storybook/addon-essentials',
  //   '@storybook/addon-interactions',
  //   '@chakra-ui/storybook-addon',
  // ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chakra-ui/storybook-addon',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-vite',
  },
  async viteFinal(config, { configType }) {
    // customize the Vite config here
    return {
      ...config,
      resolve: {
        alias: [
          {
            find: '@ajna-ui/core',
            replacement: path.resolve(__dirname, '../../../packages/core/'),
          },
        ],
      },
    }
  },
}
