import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { getRecipes } from '../../../actions/recipes.actions';

export class RecipesPage extends Component {
	static propTypes = {
		getRecipes: PropTypes.func.isRequired,
		recipes: PropTypes.array.isRequired
	};

	static defaultTypes = {
		recipes: []
	};

	componentDidMount() {
		this.props.getRecipes();
	}

	renderList() {
		if (this.props.recipes.length > 0) {
			console.log(this.props.recipes);
		}
	}

	render() {
		return (
			<div className='page-wrapper'>
				<Link to='/recipes/add'>ADD</Link>
				{this.renderList()}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		recipes: state.recipes.list
	};
}

export default connect(
	mapStateToProps,
	{ getRecipes }
)(RecipesPage);
