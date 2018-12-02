import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';

import Navigation from './shared/navigation/navigation';

// Pages
import HomePage from './pages/home/homePage';
import RecipesPage from './pages/recipes/recipesPage';

export default class app extends Component {
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
						<Switch>
							<Route exact path="/" component={HomePage} />
							<Route path="/recipes" component={RecipesPage} />
						</Switch>
					</React.Fragment>
				</HashRouter>
			</Provider>
		);
	}
}
