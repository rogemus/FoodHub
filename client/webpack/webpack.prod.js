const merge = require('webpack-merge');
const WebpackConfig = require('./webpack.main.js');

module.exports = merge(WebpackConfig, {
	mode: 'production',
	devtool: 'none'
});
