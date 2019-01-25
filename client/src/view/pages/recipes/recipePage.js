import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getRecipeDetails } from 'actions/recipes.actions';

export class RecipePage extends Component {
	static propTypes = {
		getRecipeDetails: PropTypes.func.isRequired,
		match: PropTypes.object.isRequired,
		details: PropTypes.object.isRequired,
	};

	componentDidMount() {
		if (this.props.match.params.id) {
			this.props.getRecipeDetails(this.props.match.params.id);
		}
	}

	renderDetails = () => {
		if (this.props.details) {
			return (
				<div className="form-wrapper">
					<header>
						<h2>{this.props.details.title}</h2>
					</header>
					<div>
						<img src={this.props.details.image} alt={this.props.details.title} />
					</div>
					<main>
						{this.props.details.description}
					</main>
				</div>
			);
		}
	}

	render() {
		return (
			<div className='page-wrapper'>
				{this.renderDetails()}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		details: state.recipes.details
	};
}

export default connect(
	mapStateToProps,
	{ getRecipeDetails }
)(RecipePage);
