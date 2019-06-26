import path from 'path';
// import { config } from 'webpack'

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