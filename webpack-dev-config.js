const webpack = require("webpack");
const path = require("path");
// 产出html模板
var HtmlWebpackPlugin = require("html-webpack-plugin");
// 单独样式文件
var ExtractTextPlugin = require("extract-text-webpack-plugin");
// 编译后自动打开浏览器
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
    entry : path.resolve(__dirname,"./src/app/app.js"),
    output : {
        path : path.resolve(__dirname,"dist"),
        filename : "[name].js"
    },
    module: {
        loaders: [
            {
                test: /\.js[x]?$/,
                loaders: ['babel-loader'],
                exclude: path.resolve(__dirname, 'node_modules')
            },
            {
                test: /\.css/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            },
            {
                test: /\.less/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url?limit=8192'
            },
            {
                test: /\.(woff|woff2|ttf|svg|eot)(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'your app title',
            template: './src/www/index.html',
        }),
        new OpenBrowserPlugin({ url: 'http://localhost:8080' }),
        new ExtractTextPlugin("main.css", {
            allChunks: true,
            disable: false
        }),
    ]
}