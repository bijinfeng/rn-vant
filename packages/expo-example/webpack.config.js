const createExpoWebpackConfigAsync = require('@expo/webpack-config');
const path = require('path');
const { name } = require('./package');

module.exports = async (env, argv) => {
  const config = await createExpoWebpackConfigAsync(
    {
      ...env,
      babel: {
        dangerouslyAddModulePathsToTranspile: ['@ptomasroos/react-native-multi-slider'],
      },
    },
    argv
  );

  config.resolve.alias.react = path.join(path.resolve(__dirname), './node_modules/react');

  config.output.library = `${name}-[name]`;
  config.output.libraryTarget = 'umd';
  config.output.jsonpFunction = `webpackJsonp_${name}`;
  config.output.globalObject = 'window';

  if (config.mode === 'development') {
    config.devServer = {
      ...config.devServer,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      historyApiFallback: true,
      hot: false,
      watchContentBase: false,
      liveReload: false,
    };
  }

  return config;
};
