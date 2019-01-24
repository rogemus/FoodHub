import { login, post, setToken } from './axios.actions';
import { REGISTER, SET_CURRENT_USER, SIGN_OUT, AUTHENTICATE } from 'actionTypes';

export function signIn(credential, onSuccess, onFail) {
	const config = {
		path: 'accounts/login/',
		conf: {
			data: {
				username: credential.username,
				password: credential.password
			}
		}
	};

	return login(config.path, config.conf, onSuccess, onFail);
}

export function register(data, onSuccess, onFail) {
	const config = {
		path: 'accounts/register/',
		type: REGISTER,
		conf: {
			data: {
				username: data.username,
				password: data.password,
				email: data.email
			}
		}
	};

	return post(config.path, config.conf, config.type, onSuccess, onFail);
}

export function signOut() {
	return (dispatch) => {
		dispatch({
			type: SIGN_OUT,
		});

		dispatch({
			type: SET_CURRENT_USER,
			payload: {}
		});

		dispatch({
			type: AUTHENTICATE,
			payload: false
		});

		setToken('');

		localStorage.setItem('token', JSON.stringify(''));
	};
}
