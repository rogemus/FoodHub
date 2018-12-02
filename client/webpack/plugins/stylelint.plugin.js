const path = require('path');
const StyleLintPlugin = require('stylelint-webpack-plugin');

const plugin = new StyleLintPlugin({
	configFile: path.resolve(__dirname, '../configs/stylelint.config.js'),
	context: path.resolve(__dirname, '../../src'),
	files: '**/*.pcss',
	failOnError: false,
	quiet: false
});

module.exports = plugin;
