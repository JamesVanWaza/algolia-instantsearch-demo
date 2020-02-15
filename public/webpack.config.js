const path = require("path");

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	//	https://webpack.js.org/configuration/mode/
	mode: 'development',
	entry: "./src/index.js",
//	entry: {
//		about: './src/about.js',
//		contact: './src/contact.js'
//	},
	output: {
//		filename: "[name].bundle.js",
		filename: "webpack-complete.js",
//		path: path.resolve(__dirname, "public") Can change directory name
		path: path.resolve(__dirname, "dist") 
	},
	// Can change the entry name
	// entry: "./mbuzi/mbuzide.js",
	devServer: {
		contentBase: path.join(__dirname, "dist"),
		port: 9001
	},
//	optimization: {
////		splitChunks: {
////			chunks: 'all'
////		}
////		minimizer: [new UglifyJsPlugin()]
//	},
	plugins: [new HtmlWebpackPlugin()],
	module: {
		rules: [
			{
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
					{loader: 'style-loader'},
					{loader: 'css-loader'}
				]
			},
			
			// Start here for the URL Loader
			{
				test: /\.(png|jpg)$/,
				use: [
					{loader: 'url-loader'}
				]
			}
		]
	}
}