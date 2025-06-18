const path = require('path');
const { getDefaultConfig } = require('@expo/metro-config');

const config = getDefaultConfig(__dirname);

config.watchFolders = [
  path.resolve(__dirname, '..', 'src'),
];

config.resolver.extraNodeModules = {
  'react-native-remark': path.resolve(__dirname, '..', 'src'),
};

config.resolver.nodeModulesPaths = [
  path.resolve(__dirname, 'node_modules'),
  path.resolve(__dirname, '..', 'node_modules'),
];

module.exports = config;