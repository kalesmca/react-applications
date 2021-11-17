const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const commonConfig = require("./webpack.common");
const packageJaon = require("../package.json");

const prodConfig = {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js",
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "banking",
      remotes:{
        customers:"customers@http://localhost:6062/remoteEntry.js",
        registration:"resgistration@http://localhost:6061/remoteEntry.js",
      },
      shared: packageJaon.dependencies,
    }),
    new HtmlWebpackPlugin({
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
