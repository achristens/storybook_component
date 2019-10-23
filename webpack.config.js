const webpack = require("webpack");
const path = require("path");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
    mode: "production",
    entry: "./src/index.js",
    output: {
        filename: "custom-button.js",
        library: "custom-button",
        libraryTarget: "umd",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test /\.js$/,
                exclude: /node_modules/,
                user: {
                    loader: "babel_loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"]
                    }
                }
            }
        ]
    },
    optimization: {
        minimizer: [new UglifyJsPlugin()]
    },
    plugins: [
        new CleanWebpackPlugin(["dist"])
    ]
}
