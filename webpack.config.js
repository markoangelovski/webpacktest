const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: { main: "./src/js/app.js" },
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    "css-loader"
                ]
            },
            {
                test: /\.html$/,
                use: [ "html-loader" ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "src/index.html",
        }),
        
        new HtmlWebpackPlugin({
            filename: "bookmarker.html",
            template: "src/html/bookmarker.html"
        }),
        new MiniCssExtractPlugin({
            filename: "main.css",
            chunkFilename: "[id].css"
        })
    ]
};