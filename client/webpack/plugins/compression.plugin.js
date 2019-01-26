const CompressionPlugin = require('compression-webpack-plugin');

const plugin = new CompressionPlugin({
	test: /\.js(\?.*)?$/i
});

module.exports = plugin;
