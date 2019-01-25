import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Form from 'semantic-ui-react/dist/es/collections/Form/Form';
import Button from 'semantic-ui-react/dist/es/elements/Button';

import { signIn } from 'actions/authentication.actions';
import { show } from 'actions/notification.actions';
import parseErrors from 'helpers/errors.helper';

class LoginPage extends Component {
	static propTypes = {
		signIn: PropTypes.func.isRequired,
		history: PropTypes.object.isRequired,
		show: PropTypes.func.isRequired,
	}

	state = {
		password: '',
		username: '',
		error: false
	}

	handleChange = (e, { name, value }) => {
		this.setState({ [name]: value });
	}


	handleSubmit = () => {
		this.props.signIn(this.state, this.handleSuccessLogin, this.handleFailLogin);
	}

	handleSuccessLogin = () => {
		this.props.history.push('/');

		this.props.show({
			header: 'Login successful',
			icon: 'smile outline',
			color: 'green'
		});
	}

	handleFailLogin = (errors) => {
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
					<h2>Login</h2>
					<Form name="login" id="login" onSubmit={this.handleSubmit}>
						<Form.Input
							placeholder='Username'
							name='username'
							value={this.state.username}
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
		{signIn, show}
	)(LoginPage)
);
