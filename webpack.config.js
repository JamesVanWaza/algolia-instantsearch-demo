const path = require("path");

const HtmlWebpackPlugin = require('html-webpack-plugin');

const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

const TerserPlugin = require('terser-webpack-plugin');
const { get } = require("http");

module.exports = {
    // https://webpack.js.org/configuration/mode/
    mode: 'development',
    entry: {
        index: "./src/js/index.js",
        airline: "./src/js/airline.js",
        app: './src/js/app.js',
        cars: "./src/js/cars.js",
        contacts: "./src/js/contacts.js",
        ecommerce: "./src/js/ecommerce.js",
        stocks: "./src/js/stocks.js",
        onethousandq: "./src/js/onethousandq.js",
        getObjectIds: "./src/js/get-object-ids.js",
    },
    output: {
        filename: "[name].bundle.js",
        // path: path.resolve(__dirname, "public") Can change directory name
        path: path.resolve(__dirname, "public")
    },
    target: 'web',
    devServer: {
        open: {
            app: 'Google Chrome'
        },
        watchFiles: {
            paths: ['src/']
        },
        port: 2001
    },
    optimization: {
        minimizer: [new TerserPlugin()],
        splitChunks: {
            chunks: 'all'
        }
    },
    plugins: [
        // Algolia Page
        new HtmlWebpackPlugin({
            filename: 'contacts.html',
            template: './src/html-templates/contacts-template.html'
        }),
        // Home Page
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/html-templates/index-template.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'bills.html',
            template: './src/html-templates/bills-template.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'airlines.html',
            template: './src/html-templates/airlines-template.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'cars.html',
            template: './src/html-templates/cars-template.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'changelog.html',
            template: './src/html-templates/changelog-template.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'ecommerce.html',
            template: './src/html-templates/ecommerce-template.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'keoffices.html',
            template: './src/html-templates/keoffices-template.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'signup.html',
            template: './src/html-templates/signup-template.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'onethousandquestions.html',
            template: './src/html-templates/onethousandquestions-template.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'profile.html',
            template: './src/html-templates/profile-template.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'stocks.html',
            template: './src/html-templates/stocks-template.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'successful.html',
            template: './src/html-templates/successful-template.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'sign-out.html',
            template: './src/html-templates/sign-out-template.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'signin.html',
            template: './src/html-templates/signin-template.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'usoffices.html',
            template: './src/html-templates/usoffices-template.html'
        }),
        new HtmlWebpackPlugin({
            filename: '404.html',
            template: './src/html-templates/404-template.html'
        }),

        new FaviconsWebpackPlugin({
            logo: './src/images/Icon-App-A@4x.png'
        }),

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
                { loader: 'sass-loader' },
            ]
        },
        {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
        },
        {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: 'asset/resource',
        },
        {
            test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
            type: 'asset/resource',
        }
        ]
    }
};