const path = require("path");

/** @type { import("@storybook/builder-vite").StorybookViteConfig } */
module.exports = {
  framework: "@storybook/react",
  builder: "@storybook/builder-vite",
  stories: ["../packages/**/*.stories.tsx"],
  addons: ["@storybook/addon-storysource"],
  reactOptions: {
    strictMode: true
  },
  viteFinal: async (config) => {
    const newConfig = {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          ...convertTsConfigPathsToWebpackAliases()
        }
      }
    };
    return newConfig;
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
