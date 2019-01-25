import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Provider, connect } from 'react-redux';
import PropTypes from 'prop-types';

import { setToken } from 'actions/axios.actions';
import { AUTHENTICATE } from 'actionTypes';

import './../styles/main.pcss';
import Navigation from 'shared/navigation/navigation';
import Notification from 'shared/notification/notification';

// Pages
import HomePage from './pages/home/homePage';
import RecipesPage from './pages/recipes/recipesPage';
import LoginPage from './pages/login/loginPage';
import RegisterPage from './pages/register/registerPage';
import RecipesAddPage from './pages/recipes/recipesAddPage';
import LogoutPage from './pages/logout/logoutPage';
import CurrentUser from './pages/currentUser/currentUserPage';
import RecipePage from './pages/recipes/recipePage';

export class App extends Component {
	static propTypes = {
		store: PropTypes.object.isRequired,
		authenticated: PropTypes.bool.isRequired,
	};

	static defaultTypes = {
		store: {}
	};

	componentWillMount() {
		this.populateUser();
	}

	populateUser() {
		const token = JSON.parse(localStorage.getItem('token'));

		if (token) {
			setToken(token);

			this.props.store.dispatch({
				type: AUTHENTICATE,
				payload: true
			});
		}
	}

	render() {
		return (
			<Provider store={this.props.store}>
				<HashRouter>
					<React.Fragment>
						<Navigation />
						<div className="wrapper">
							<Switch>
								<Route exact path="/" component={HomePage} />
								<Route exact path="/recipes" component={RecipesPage} />
								<Route exact path="/recipes/:id" component={RecipePage} />
								<Route exact path="/logout" component={LogoutPage} />
								
								{this.props.authenticated ? (
									<Route exact path="/me" component={CurrentUser} />
								) : null}

								{this.props.authenticated ? (
									<Route exact path="/recipes-add" component={RecipesAddPage} />
								) : null}

								{!this.props.authenticated ? (
									<Route exact path="/register" component={RegisterPage} />
								) : null}

								{!this.props.authenticated ? (
									<Route exact path="/login" component={LoginPage} />
								) : null}

							</Switch>

							<Notification/>
						</div>
					</React.Fragment>
				</HashRouter>
			</Provider>
		);
	}
}

const mapStateToProp = (state) => ({
	authenticated: state.currentUser.authenticated
});

export default connect(
	mapStateToProp,
	null
)(App);
