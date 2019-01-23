import React, { Component } from 'react';
import { connect } from 'react-redux';

class RegisterPage extends Component {
	render() {
		return (
			<div className='page-container'>
				<h1>Register</h1>
			</div>
		);
	}
}

export default connect(null, null)(RegisterPage);
