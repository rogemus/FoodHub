import React, { Component } from 'react';
import { connect } from 'react-redux';

class LoginPage extends Component {
	render() {
		return (
			<div className='page-container'>
				<h1>Login</h1>
			</div>
		);
	}
}

export default connect(null, null)(LoginPage);
