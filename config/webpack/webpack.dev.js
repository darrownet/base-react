const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { resolve } = require("path");
const dotenv = require("dotenv").config({
  path: resolve(__dirname, "../../.env")
});
const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "development",
  target: "web",
  devtool: "cheap-module-source-map",
  entry: ["react-hot-loader/patch", "webpack/hot/only-dev-server"],
  devServer: {
    contentBase: resolve(__dirname, "../../src"),
    port: 3000,
    historyApiFallback: true,
    hot: true,
    https: false,
    inline: true,
    headers: { "Access-Control-Allow-Origin": "*" }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, "../../src/index.html"),
      inject: true
    })
  ]
});
