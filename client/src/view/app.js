import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Navigation from './shared/navigation/navigation';

// Pages
import HomePage from './pages/home/homePage';
import RecipesPage from './pages/recipes/recipesPage';

export default class app extends Component {
	render() {
		return (
			<HashRouter>
				<React.Fragment>
					<Navigation />
					<Switch>
						<Route exact path="/" component={HomePage} />
						<Route path="/recipes" component={RecipesPage} />
					</Switch>
				</React.Fragment>
			</HashRouter>
		);
	}
}
