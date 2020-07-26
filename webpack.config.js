const path = require("path");

const HtmlWebpackPlugin = require('html-webpack-plugin');

const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = {
    // https://webpack.js.org/configuration/mode/
    mode: 'development',
    entry: {
        algolia: "./src/js/algolia.js",
        algoliatwo: "./src/js/algoliatwo.js",
        ecommerce: ".src/js/ecommerce.js",
        index: "./src/js/index.js"
    },
    output: {
        filename: "[name].bundle.js",
        // path: path.resolve(__dirname, "public") Can change directory name
        path: path.resolve(__dirname, "public")
    },
    devServer: {
        contentBase: path.join(__dirname, "public"),
        port: 9002
    },
    optimization: {
        minimizer: [new UglifyJsPlugin()]
    },
    plugins: [
        // Algolia Page
        new HtmlWebpackPlugin({
            filename: 'algolia.html',
            template: './src/html-templates/algolia-template.html'
        }),
        // AlgoliaTwo Page
        new HtmlWebpackPlugin({
            filename: 'algoliatwo.html',
            template: './src/html-templates/algolia-template.html'
        }),
        // Algolia Ecommerce
        new HtmlWebpackPlugin({
            filename: 'ecommerce.html',
            template: './src/html-templates/ecommerce-template.html'
        }),
        // Home Page
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/html-templates/index-template.html'
        }),
        new FaviconsWebpackPlugin({
            logo: './src/images/AID-Favicon003@4x.png'
        })
    ],
    module: {
        rules: [{
                // Whenever a javascript file is found, babel should run and do not compile node_module files
                test: /\js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS Strings
                    { loader: 'style-loader' },

                    // Translates CSS into CommonJS
                    { loader: 'css-loader' },

                    // Compiles Sass to CSS
                    { loader: 'sass-loader' }
                ]
            },
            // Start here for the URL Loader
            {
                test: /\.(png|jpg)$/,
                use: [
                    { loader: 'url-loader' }
                ]
            },
            {
                test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9]\.png|jpg)?$/,
                use: 'url-loader?limit=10000',
            },
            {
                test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
                use: 'file-loader',
            }
        ]
    }
};