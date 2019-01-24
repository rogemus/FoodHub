import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Button, Form } from 'semantic-ui-react';

import { register } from 'actions/authentication.actions';
import { show } from 'actions/notification.actions';
import parseErrors from 'helpers/errors.helper';


class RegisterPage extends Component {
	static propTypes = {
		register: PropTypes.func.isRequired,
		history: PropTypes.object.isRequired,
		show: PropTypes.func.isRequired,
	}

	state = {
		password: '',
		username: '',
		email: '',
		error: false
	}

	handleChange = (e, { name, value }) => {
		this.setState({ [name]: value });
	}

	handleSubmit = () => {
		this.props.register(this.state, this.handleSuccessRegister, this.handleFailRegister);
	}

	handleSuccessRegister = () => {
		this.props.history.push('/login');

		this.props.show({
			header: 'Register successful',
			content: 'You can login to your new account',
			icon: 'smile outline',
			color: 'green'
		});
	}

	handleFailRegister = (errors) => {
		this.setState({
			error: true
		});

		this.props.show({
			header: 'Error',
			icon: 'warning circle',
			color: 'red',
			list: parseErrors(errors)
		});
	}

	render() {
		return (
			<div className='page-wrapper'>
				<div className='form-wrapper'>
					<h2>Register</h2>
					<Form name='register' id='register' onSubmit={this.handleSubmit}>
						<Form.Input
							placeholder='Username'
							name='username'
							value={this.state.username}
							onChange={this.handleChange}
						/>
						<Form.Input
							placeholder='Email'
							name='email'
							value={this.state.email}
							onChange={this.handleChange}
						/>
						<Form.Input
							type='password'
							placeholder='Password'
							name='password'
							value={this.state.password}
							onChange={this.handleChange}
						/>
						<Button secondary type='submit'>Submit</Button>
					</Form>
				</div>
			</div>
		);
	}
}

export default withRouter(
	connect(
		null,
		{register, show}
	)(RegisterPage)
);
