import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Navigation extends Component {
	render() {
		return (
			<ul>
				<li>
					<NavLink to="/">Home</NavLink>
				</li>
				<li>
					<NavLink to="/recipes">Recipes</NavLink>
				</li>
			</ul>
		);
	}
}
