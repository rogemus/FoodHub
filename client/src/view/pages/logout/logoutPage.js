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
				<div className='form-wrapper'>
					<h1>Logout</h1>
					<h3>It is sad to see you go 😥</h3>
					<h2>See you soon 🎉</h2>
				</div>
			</div>
		);
	}
}



export default connect(
	null,
	{signOut}
)(LogoutPage);
