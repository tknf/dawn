const path = require("path");

/** @type { import("@storybook/builder-vite").StorybookViteConfig } */
module.exports = {
  framework: "@storybook/react",
  stories: ["../packages/**/*.stories.tsx"],
  addons: ["@storybook/addon-storysource"],
  reactOptions: {
    strictMode: true
  },
  webpackFinal: async (config) => ({
    ...config,
    resolve: {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        ...convertTsConfigPathsToWebpackAliases()
      }
    }
  })
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
