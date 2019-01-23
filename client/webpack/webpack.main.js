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
		alias: {
			actionTypes: path.resolve(__dirname, '../src/actions/actionTypes.js')
		},
	},
	plugins: [htmlPlugin, cssPlugin, stylelintPlugin]
};
