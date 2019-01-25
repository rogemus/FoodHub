import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Form } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import { postRecipes } from 'actions/recipes.actions';

export class RecipesPage extends Component {
	state = {
		description: '',
		title: '',
		image: ''
	}

	static propTypes = {
		postRecipes: PropTypes.func.isRequired
	};


	static defaultTypes = {
	};

	handleChange = (e, { name, value }) => {
		this.setState({ [name]: value });
	}

	handleFileChange = (e) => {
		const {target} = e;
		const image = target.files[0];
		this.setState({ image });
	}

	handleSubmit = () => {
		const data = new FormData();

		data.append('title', this.state.title);
		data.append('description', this.state.description);
		data.append('image', this.state.image);

		this.props.postRecipes(data);
	}

	render() {
		return (
			<div className="page-wrapper">
				<div className='form-wrapper'>
					<h2>Add Recipes</h2>
					<Form
						id='addRecipe'
						name='addRecipe'
						onSubmit={this.handleSubmit}>
						<Form.Input
							placeholder='Title'
							name='title'
							value={this.state.username}
							onChange={this.handleChange}
						/>
						<Form.TextArea
							onChange={this.handleChange}
							name='description'
							label='Description'
							placeholder='Tell us more ...'
						/>
						<label htmlFor='image'>
							Image
						</label>
						<input
							onChange={this.handleFileChange}
							id='image'
							name='image'
							type='file'
							multiple={false}
						/>
						<Button
							secondary
							type='submit'>
							Submit
						</Button>
					</Form>
				</div>
			</div>
		);
	}
}

function mapStateToProps() {
	return {
	};
}

export default connect(
	mapStateToProps,
	{ postRecipes }
)(RecipesPage);
