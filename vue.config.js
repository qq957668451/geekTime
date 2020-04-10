const path = require("path");
// const tsImportPluginFactory = require("ts-import-plugin");
// var ExtractTextPlugin = require('extract-text-webpack-plugin');

function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  lintOnSave: true,
  devServer: {
    host: "127.0.0.1",
    port: 8080,
    disableHostCheck: true,
  },
  productionSourceMap: false,
  assetsDir: "static",
  runtimeCompiler: true,
  chainWebpack: (config) => {
    config.resolve.alias
      .set("@$", resolve("src"))
      .set("assets", resolve("src/assets"))
      .set("router", resolve("src/router"));
  },
};
