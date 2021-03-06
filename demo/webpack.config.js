/**
 * Webpack configuration
 */
var path = require("path");
var StatsWriterPlugin = require("../index").StatsWriterPlugin;

module.exports = {
  cache: true,
  context: __dirname,
  entry: "./main.js",
  output: {
    path: path.join(__dirname, "build"),
    filename: "[hash].main.js"
  },
  plugins: [
    // Try various defaults and options.
    new StatsWriterPlugin(),
    new StatsWriterPlugin({}),
    new StatsWriterPlugin({
      path: path.join(__dirname, "build"),
      filename: "stats-transform.json",
      fields: null,
      transform: function (data) {
        return data.assetsByChunkName;
      }
    }),
    new StatsWriterPlugin({
      path: path.join(__dirname, "build"),
      filename: "stats-custom.json"
    })
  ]
};
