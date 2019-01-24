import { login, post, setToken} from './axios.actions';
import { REGISTER, SET_CURRENT_USER, SIGN_OUT, AUTHENTICATE } from 'actionTypes';

export function signIn(credential, onSuccess, onFail) {
	const config = {
		path: 'accounts/login/',
		conf: {
			data: {
				username: credential.username,
				password: credential.password,
				is_staff: false
			}
		}
	};

	return login(config.path, config.conf, onSuccess, onFail);
}

export function register(data) {
	const config = {
		path: 'accounts/register/',
		type: REGISTER,
		conf: {
			data: data
		}
	};

	return post(config.path, config.conf, config.type);
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
	};
}
