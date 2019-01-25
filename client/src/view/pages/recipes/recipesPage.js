import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import uuid from 'helpers/uuid.helper';
import Tile from 'shared/tile/tile';

import { getRecipes } from 'actions/recipes.actions';

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
			return this.props.recipes.map(item => {
				const id = uuid();
	
				return <Tile {...item} key={id} />;
			});
		}
	}


	render() {
		return (
			<div className='page-wrapper'>
				<div className="recipes">
					{this.renderList()}
				</div>
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
