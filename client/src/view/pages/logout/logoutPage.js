import React, { Component } from 'react';
import { connect } from 'react-redux';

class LogoutPage extends Component {
	render() {
		return (
			<div className='page-container'>
				<h1>Logout</h1>
			</div>
		);
	}
}

export default connect(null, null)(LogoutPage);
