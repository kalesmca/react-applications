const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const commonConfig = require("./webpack.common");
const packageJson = require("../package.json");

const devConfig = {
  mode: "development",
  output: {
    publicPath: "http://localhost:4002/",
  },
  devServer: {
    port: 4002,
    historyApiFallback: {
      index: "index.html",
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "registration",
      filename: "remoteEntry.js",
      exposes: {
        "./RegistrationApp": "./src/bootstrap.js",
      },
      shared: packageJson.dependencies,
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
