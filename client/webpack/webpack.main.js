const path = require('path');

// Loaders
const jsLoader = require('./loaders/js.loader');
const eslintLoader = require('./loaders/eslint.loader');
const htmlLoader = require('./loaders/html.loader');
const postCssLoader = require('./loaders/postcss.loader');

// Plugins
const htmlPlugin = require('./plugins/html.plugin');
const cssPlugin = require('./plugins/css.plugin');
const stylelintPlugin = require('./plugins/stylelint.plugin');

// Config
const aliasConfig = require('./configs/alias.config');
const devServerConfig = require('./configs/devServer.config');

module.exports = {
	entry: [path.resolve(__dirname, '../src/index.js')],
	module: {
		rules: [jsLoader, eslintLoader, htmlLoader, postCssLoader]
	},
	output: {
		path: path.resolve(__dirname, '../dist'),
		filename: 'bundle.js'
	},
	resolve: {
		alias: aliasConfig
	},
	devServer: devServerConfig,
	plugins: [htmlPlugin, cssPlugin, stylelintPlugin]
};
