/* eslint-disable */
const { resolve } = require("path");
const { getDefaultConfig } = require("@expo/metro-config");

const config = getDefaultConfig(__dirname);

config.watchFolders = [resolve(__dirname, "..", "src")];

config.resolver.extraNodeModules = {
  "@react-native-remark": resolve(__dirname, "..", "src"),
};

config.resolver.nodeModulesPaths = [
  resolve(__dirname, "node_modules"),
];

module.exports = config;
