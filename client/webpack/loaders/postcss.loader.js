const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	test: /\.pcss$/,
	use: [
		{
			loader: MiniCssExtractPlugin.loader,
			options: {
				publicPath: '../'
			}
		},
		{
			loader: 'css-loader',
			options: { importLoaders: 1 }
		},
		{
			loader: 'postcss-loader',
			options: {
				config: {
					path: path.resolve(__dirname, '../configs/postcss.config.js')
				}
			}
		}
	]
};
