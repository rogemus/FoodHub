import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Button, Form } from 'semantic-ui-react';

import { signIn } from 'actions/authentication.actions';

class LoginPage extends Component {
	constructor(props) {
		super(props);

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleSuccessLogin = this.handleSuccessLogin.bind(this);
		this.handleFailLogin = this.handleFailLogin.bind(this);
	}

	static propTypes = {
		signIn: PropTypes.func.isRequired,
		history: PropTypes.object.isRequired
	}

	state = {
		password: '',
		username: '',
		error: false
	}

	handleChange(e, { name, value }) {
		this.setState({ [name]: value });
	}


	handleSubmit() {
		this.props.signIn(this.state, this.handleSuccessLogin, this.handleFailLogin);
	}

	handleSuccessLogin() {
		this.props.history.push('/');
	}

	handleFailLogin() {
		this.setState({
			error: true
		});
	}

	render() {
		return (
			<div className='page-container'>
				<h1>Login</h1>
				<Form onSubmit={this.handleSubmit}>
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
					<Button type='submit'>Submit</Button>
				</Form>
			</div>
		);
	}
}

export default withRouter(connect(null, {signIn})(LoginPage));
