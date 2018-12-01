module.exports = {
	test: /\.js$/,
	exclude: /node_modules/,
	use: {
		loader: 'babel-loader',
		options: {
			presets: ['@babel/preset-env', '@babel/preset-react'],
			plugins: ['@babel/plugin-proposal-class-properties']
		}
	}
};
