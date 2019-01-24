import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';

import './../styles/main.pcss';
import Navigation from 'shared/navigation/navigation';
import Notification from 'shared/notification/notification';

// Pages
import HomePage from './pages/home/homePage';
import RecipesPage from './pages/recipes/recipesPage';
import LoginPage from './pages/login/loginPage';
import RegisterPage from './pages/register/registerPage';
import LogoutPage from './pages/logout/logoutPage';

export default class App extends Component {
	static propTypes = {
		store: PropTypes.object.isRequired
	};

	static defaultTypes = {
		store: {}
	};

	render() {
		return (
			<Provider store={this.props.store}>
				<HashRouter>
					<React.Fragment>
						<Navigation />
						<div className="wrapper">
							<Switch>
								<Route exact path="/" component={HomePage} />
								<Route path="/recipes" component={RecipesPage} />
								<Route path="/login" component={LoginPage} />
								<Route path="/logout" component={LogoutPage} />
								<Route path="/register" component={RegisterPage} />
							</Switch>

							<Notification/>
						</div>
					</React.Fragment>
				</HashRouter>
			</Provider>
		);
	}
}
