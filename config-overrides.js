// config-overrides.js
// const webpack = require('webpack');

// module.exports = function override(config, env) {
//   config.resolve.fallback = {
//     ...config.resolve.fallback, // Keep existing fallbacks
//     path: require.resolve('path-browserify'),
//     crypto: require.resolve('crypto-browserify'),
//     stream: require.resolve('stream-browserify'),
//     // Add other missing modules as needed
//   };
//   config.plugins = [
//     ...config.plugins,
//     new webpack.ProvidePlugin({
//       process: 'process/browser',
//       Buffer: ['buffer', 'Buffer'],
//     }),
//   ];
//   return config;
// };
// const webpack = require("webpack");
// module.exports = function override(config) {
//   const fallback = config.resolve.fallback || {};
//   Object.assign(fallback, {
//     path: require.resolve("path-browserify"),
//   });
//   config.resolve.fallback = fallback;
//   config.plugins = (config.plugins || []).concat([
//     new webpack.ProvidePlugin({
//       process: "process/browser",
//       Buffer: ["buffer", "Buffer"],
//     }),
//   ]);
//   return config;
// };