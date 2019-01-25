import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from 'semantic-ui-react/dist/es/collections/Form/Form';
import Button from 'semantic-ui-react/dist/es/elements/Button';import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import parseErrors from 'helpers/errors.helper';
import { postRecipes } from 'actions/recipes.actions';
import { show } from 'actions/notification.actions';


export class RecipeAddPage extends Component {
	state = {
		description: '',
		title: '',
		image: ''
	}

	static propTypes = {
		postRecipes: PropTypes.func.isRequired,
		history: PropTypes.object.isRequired,
		show: PropTypes.func.isRequired,
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

	handleAddSuccess = () => {
		this.props.history.push('/');
		this.props.show({
			header: 'Login successful',
			icon: 'smile outline',
			color: 'green'
		});
	}

	handleAddFail = (errors) => {
		this.props.show({
			header: 'Error',
			icon: 'warning circle',
			color: 'red',
			list: parseErrors(errors)
		});
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
						<Form.Field>
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
						</Form.Field>
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

export default withRouter(
	connect(
		null,
		{ postRecipes, show }
	)(RecipeAddPage)
);
