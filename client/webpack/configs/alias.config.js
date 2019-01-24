const path = require('path');

module.exports = {
	actions: path.resolve(__dirname, '../../src/actions'),
	actionTypes: path.resolve(__dirname, '../../src/actions/actionTypes.js'),
	shared: path.resolve(__dirname, '../../src/view/shared'),
};
