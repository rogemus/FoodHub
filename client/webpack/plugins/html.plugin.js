const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const plugin = new HtmlWebPackPlugin({
	template: path.resolve(__dirname, '../../src/index.html'),
	filename: './index.html'
});

module.exports = plugin;
