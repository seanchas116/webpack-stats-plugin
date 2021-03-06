Webpack Stats Plugin
====================

[![Build Status][trav_img]][trav_site]

This plugin will ingest the webpack
[stats](https://github.com/webpack/docs/wiki/node.js-api#stats) object,
process / tranform the object and write out to a file for further consumption.

The most common use case is building a hashed bundle and wanting to
programmatically referring to the correct bundle path in your Node.js server.

## Installation

The plugin is available via [npm](https://www.npmjs.com/package/webpack-stats-plugin):

```
$ npm install --save webpack-stats-plugin
```

## Examples

### Stats Writer Plugin

```js
var StatsWriterPlugin = require("webpack-stats-plugin").StatsWriterPlugin;

module.exports = {
  plugins: [
    // Everything else **first**.

    // Write out stats file to build directory.
    new StatsWriterPlugin({
      path: path.join(__dirname, "build"),
      filename: "stats.json" // Default
    })
  ]
}
```

## Plugins

* [`StatsWriterPlugin(opts)`](#statswriterplugin-opts-)

### `StatsWriterPlugin(opts)`
* **opts** (`Object`) options
* **opts.path** (`String`) directory path to create / output to (Default: &quot;&quot;)
* **opts.filename** (`String`) output file name (Default: &quot;stat.json&quot;)
* **opts.fields** (`Array`) fields of stats obj to keep (Default: \[&quot;assetsByChunkName&quot;\])
* **opts.transform** (`Function`) transform function of stats object before writing

Stats writer module.

Stats can be a string or array (we"ll have array from using source maps):

```js
"assetsByChunkName": {
  "main": [
    "cd6371d4131fbfbefaa7.bundle.js",
    "../js-map/cd6371d4131fbfbefaa7.bundle.js.map"
  ]
},
```

**Note**: The stats object is **big**. It includes the entire source included
in a bundle. Thus, we default `opts.fields` to `["assetsByChunkName"]` to
only include those. However, if you want the _whole thing_ (maybe doing an
`opts.transform` function), then you can set `fields: null` in options to
get **all** of the stats object.

See:
- http://webpack.github.io/docs/long-term-caching.html#get-filenames-from-stats
- https://github.com/webpack/docs/wiki/node.js-api#stats

## Contributions

Contributions welcome! Make sure to pass `$ gulp check`.

[trav]: https://travis-ci.org/
[trav_img]: https://api.travis-ci.org/FormidableLabs/webpack-stats-plugin.svg
[trav_site]: https://travis-ci.org/FormidableLabs/webpack-stats-plugin
