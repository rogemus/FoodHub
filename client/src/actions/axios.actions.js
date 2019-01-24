import axios from 'axios';
import {
	ERRORS,
	SET_CURRENT_USER,
	SET_TOKEN,
	LOGIN
} from 'actionTypes';

const API_URL = '/';

const instance = axios.create({
	headers: {
		accept: 'application/json'
	}
});

export function setToken(token) {
	instance.defaults.headers.common['Authorization'] = token;
}

export function get(path, config, actionType, success, fail) {
	const requestConfig = {
		method: 'GET',
		url: `${API_URL}${path}`
	};

	return (dispatch) => {
		return instance(Object.assign(requestConfig, config))
			.then((response) => {
				dispatch({
					payload: response.data,
					type: actionType
				});

				if (success) {
					success();
				}
			})
			.catch((error) => {
				dispatch({
					payload: error,
					type: ERRORS
				});

				if (fail) {
					fail();
				}
			});
	};
}

export function post(path, config, actionType, success, fail) {
	const requestConfig = {
		method: 'POST',
		url: `${API_URL}${path}`
	};

	return (dispatch) => {
		return instance(Object.assign(requestConfig, config))
			.then((response) => {
				dispatch({
					payload: response.data,
					type: actionType
				});

				if (success) {
					success();
				}
			})
			.catch((error) => {
				dispatch({
					payload: error.response.data,
					type: ERRORS
				});

				if (fail) {
					fail();
				}
			});
	};
}

export function login(path, config, success, fail) {
	const requestConfig = {
		method: 'POST',
		url: `${API_URL}${path}`
	};

	return (dispatch) => {
		return instance(Object.assign(requestConfig, config))
			.then((response) => {
				const isUserLogin = true;
				const token = response.data.token;
				const user = {
					email: response.data.email,
					username: response.data.username
				};

				dispatch({
					type: LOGIN,
					payload: isUserLogin
				});

				dispatch({
					type: SET_TOKEN,
					payload: token
				});

				dispatch({
					type: SET_CURRENT_USER,
					payload: user
				});

				if (success) {
					success();
				}
			})
			.catch((error) => {
				dispatch({
					payload: error.response.data,
					type: ERRORS
				});

				if (fail) {
					fail();
				}
			});
	};
}
