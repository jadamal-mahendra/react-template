const path = require("path");
module.exports = {
  plugins: [
    {
      plugin: require("craco-alias"),
      options: {
        source: "tsconfig",
        // baseUrl SHOULD be specified
        // plugin does not take it from tsconfig
        baseUrl: ".",
        // tsConfigPath should point to the file where "baseUrl" and "paths" are specified
        tsConfigPath: "./tsconfig.paths.json",
      },
    },
  ],
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
    plugins: {
      remove: ["ModuleScopePlugin"],
    },
    configure: (webpackConfig) => {
      webpackConfig.node = {
        global: false,
      };
      return webpackConfig;
    },
  },
  eslint: {
    enable: false,
  },
};
