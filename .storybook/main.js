const path = require("path");

/** @type { import("@storybook/builder-vite").StorybookViteConfig } */
module.exports = {
  framework: "@storybook/react",
  stories: ["../packages/**/*.stories.tsx"],
  addons: [
    "@storybook/addon-storysource",
    {
      name: "storybook-addon-sass-postcss",
      options: {
        postcssLoaderOptions: {
          implementation: require("postcss")
        }
      }
    }
  ],
  reactOptions: {
    strictMode: true
  },
  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      ...convertTsConfigPathsToWebpackAliases()
    };
    return config;
  }
};

function convertTsConfigPathsToWebpackAliases() {
  const rootDir = path.resolve(__dirname, "../");
  const tsconfig = require("../tsconfig.json");
  const tsconfigPaths = Object.entries(tsconfig.compilerOptions.paths);

  return tsconfigPaths.reduce((aliases, [realPath, mappedPath]) => {
    aliases[realPath] = path.join(rootDir, mappedPath[0]);
    return aliases;
  }, {});
}
