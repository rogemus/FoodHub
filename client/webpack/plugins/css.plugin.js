const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const plugin = new MiniCssExtractPlugin({
	filename: 'bundle.css'
});

module.exports = plugin;
