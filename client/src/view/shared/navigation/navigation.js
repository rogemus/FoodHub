import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';

export default class Navigation extends Component {
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
				</ul>
			</nav>
		);
	}
}
