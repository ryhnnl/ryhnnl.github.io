const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const prod = process.env.NODE_ENV === 'production'

module.exports = {
	entry: path.join(__dirname, '/src/client.jsx'),

	devtool: prod ? false : 'eval-source-map',

	mode: prod ? 'production' : 'development',

	output: {
		filename: '[name].[hash].js',
		path: path.join(__dirname, 'build/')
	},

	resolve: {
		extensions: ['.js', '.jsx'],
		alias: {
			'@': path.join(__dirname, '/src/')
		}
	},

	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			}
		]
	},

	devServer: {
		hot: true,
		open: true,
		stats: 'errors-only',
		clientLogLevel: 'silent'
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, '/src/index.html'),
			filename: './index.html'
		})
	]
}
