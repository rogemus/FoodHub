import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export class Navigation extends Component {
	static propTypes = {
		authenticated: PropTypes.bool.isRequired
	};

	static defaultTypes = {
		authenticated: false
	};

	render() {
		return (
			<nav className="main-nav">
				<ul className="main-nav-list wrapper">
					<li className="main-nav-list-item logo">
						<Link className="main-nav-list-item-link" to="/">
							FoodHub &#127829;
						</Link>
					</li>
					<li className="main-nav-list-item">
						<NavLink exact className="main-nav-list-item-link" to="/">
							Home
						</NavLink>
					</li>
					<li className="main-nav-list-item">
						<NavLink exact className="main-nav-list-item-link" to="/recipes">
							Recipes
						</NavLink>
					</li>

					{!this.props.authenticated ? (
						<>
							<li className="main-nav-list-item">
								<NavLink exact className="main-nav-list-item-link" to="/login">
									Login
								</NavLink>
							</li>
							<li className="main-nav-list-item">
								<NavLink exact className="main-nav-list-item-link" to="/register">
									Register
								</NavLink>
							</li>
						</>
					) : null}

					{this.props.authenticated ? (
						<>
							<li className="main-nav-list-item">
								<NavLink exact className="main-nav-list-item-link" to="/me">
									Profile
								</NavLink>
							</li>
							<li className="main-nav-list-item">
								<NavLink exact className="main-nav-list-item-link" to="/logout">
									Logout
								</NavLink>
							</li>
						</>
					) : null}
				</ul>
			</nav>
		);
	}
}

const mapStateToProp = (state) => ({
	authenticated: state.currentUser.authenticated
});

export default connect(mapStateToProp, null)(Navigation);
