const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const MFE = require("webpack/lib/container/ModuleFederationPlugin")
const pkgJson = require("./package.json");

module.exports = {
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'index.bundle.js',
    },
    devServer: {
        port: 3001,
        watchContentBase: true,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            }
        ]
    },
    plugins: [new MiniCssExtractPlugin(),
        new MFE({
            name: "list",
            filename:"remoteEntry.js",
            exposes:{
                "./ListApp": "./src/bootstrap.js",
            },
            shared: pkgJson.dependencies
        })],
};