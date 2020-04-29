const path = require("path");

const HtmlWebpackPlugin = require('html-webpack-plugin');

const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
    //	https://webpack.js.org/configuration/mode/
    mode: 'development',
    entry: "./src/js/algolia.js",
    output: {
        //		filename: "[name].bundle.js",
        filename: "main.js",
        //		path: path.resolve(__dirname, "public") Can change directory name
        path: path.resolve(__dirname, "public")
    },
    // Can change the entry name
    // entry: "./mbuzi/mbuzide.js",
    devServer: {
        contentBase: path.join(__dirname, "public"),
        port: 9002
    },
    optimization: {
        //		splitChunks: {
        //			chunks: 'all'
        //		}
        minimizer: [new UglifyJsPlugin()]
    },
    plugins: [new HtmlWebpackPlugin()],
    module: {
        rules: [{
                // Whenever a javascript file is found, babel should run and do not compile node_module files
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        // Supports all the browsers
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' }
                ]
            },

            // Start here for the URL Loader
            {
                test: /\.(png|jpg)$/,
                use: [
                    { loader: 'url-loader' }
                ]
            }
        ]
    }
}