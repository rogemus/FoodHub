import { login, post } from './axios.actions';
import { REGISTER } from 'actionTypes';

export function signIn(credential) {
	const config = {
		path: 'accounts/login',
		params: credential,
	};

	return login(config.path, config.params);
}

export function register(data) {
	const config = {
		path: 'accounts/register',
		type: REGISTER,
		conf: {
			data: data
		}
	};

	return post(config.path, config.conf, config.type);
}
