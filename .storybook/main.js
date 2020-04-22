const path = require("path");

module.exports = {
  addons: ["@storybook/preset-scss", "@storybook/addon-knobs/register"],
  stories: ["../stories/**/*.stories.[tj]s"],
  webpackFinal: async (config, { configType }) => {
    config.resolve.alias["~"] = path.resolve(__dirname, "..", "src");

    return config;
  }
};
