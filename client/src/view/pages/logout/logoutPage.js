import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signOut } from 'actions/authentication.actions';
import PropTypes from 'prop-types';

class LogoutPage extends Component {
	static propTypes = {
		signOut: PropTypes.func.isRequired,
	};

	componentDidMount() {
		this.props.signOut();
	}

	render() {
		return (
			<div className='page-wrapper'>
				<h2>Logout</h2>
			</div>
		);
	}
}



export default connect(
	null,
	{signOut}
)(LogoutPage);
