const path = require('path');

module.exports = {
	contentBase: path.join(__dirname, '../../build'),
	port: 8080,
	open: true,
	proxy: [{
		context: ['/accounts', '/api'],
		target: 'http://0.0.0.0:8001/',
	}]
};
