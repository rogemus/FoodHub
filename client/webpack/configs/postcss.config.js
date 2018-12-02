module.exports = {
	plugins: {
		'postcss-normalize': {
			browsers: 'last 5 versions',
			allowDuplicates: false
		},
		'postcss-mixins': {},
		'postcss-pxtorem': {
			rootValue: 16,
			unitPrecision: 5,
			propList: ['font', 'font-size', 'line-height', 'letter-spacing'],
			selectorBlackList: [],
			replace: true,
			mediaQuery: false,
			minPixelValue: 0
		},
		'postcss-import': {},
		'postcss-simple-vars': {},
		'postcss-nested': {},
		'postcss-preset-env': {
			browsers: 'last 5 versions'
		}
	}
};
