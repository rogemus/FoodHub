import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button, Form } from 'semantic-ui-react';

import { signIn } from 'actions/authentication.actions';

class LoginPage extends Component {
	constructor(props) {
		super(props);

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	static propTypes = {
		signIn: PropTypes.func.isRequired,
	}

	state = {
		password: '',
		username: ''
	}

	handleChange(e, { name, value }) {
		this.setState({ [name]: value });
	}


	handleSubmit() {
		this.props.signIn(this.state);
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

export default connect(null, {signIn})(LoginPage);
