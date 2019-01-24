import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getCurrentUserDetails } from 'actions/currentUser.actions';
import PropTypes from 'prop-types';
import _isEmpty from 'lodash/isEmpty';

class CurrentUser extends Component {
	static propTypes = {
		getCurrentUserDetails: PropTypes.func.isRequired,
		details: PropTypes.object.isRequired,
		authenticated: PropTypes.bool.isRequired,
		history: PropTypes.object.isRequired,
	};

	componentDidMount() {
		this.requestUserData();
	}

	requestUserData = () =>  {
		if (this.props.authenticated) {
			this.props.getCurrentUserDetails();
		} else {
			this.props.history.push('/');
		}
	}

	render() {
		const { details } = this.props;

		if (_isEmpty(details)) {
			return 'Loading';
		}

		return (
			<div className='page-container'>
				<h2>Profile</h2>

				<section>
					<header>
						<h3>Username</h3>
					</header>
					<main>
						{details.username}
					</main>
				</section>
				<section>
					<header>
						<h3>Email</h3>
					</header>
					<main>
						{details.email}
					</main>
				</section>
				<section>
					<header>
						<h3>Joined</h3>
					</header>
					<main>
						{details.joined}
					</main>
				</section>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	details: state.currentUser.details,
	authenticated: state.currentUser.authenticated
});

export default withRouter(
	connect(
		mapStateToProps,
		{ getCurrentUserDetails }
	)(CurrentUser)
);
