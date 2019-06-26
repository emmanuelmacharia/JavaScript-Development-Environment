import path from 'path';
// import { config } from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin';

module.exports = {
	mode: "production",
	devtool: 'source-map',
	// noInfo: false,
	entry: [
		path.resolve(__dirname, 'src/index')
	],
	target: 'web',
	output: {
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/',
		filename: 'bundle.js'
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'src/index.html',
			minify: {
				removeComments: true,
				collapseWhitespace: true,
				removeRedundantAttributes: true,
				useShortDoctype: true,
				removeEmptyAttributes: true,
				removeStyleLinkTypeAttributes: true,
				keepClosingSlash:true,
				minifyCSS: true,
				minifyJS: true,
				minifyURLs: true
			},
			inject: true
		}),
		//Eliminate duplicate packages when bundling
		// new webpack.optimize.DedupePlugin(),
		//Minify
		// new config.optimization.minimize()

	],
	module: {
		rules: [
			{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
			{ test: /\.css$/, use: [{ loader: 'style-loader' }, { loader: 'css-loader' }] }
		]
	}

}