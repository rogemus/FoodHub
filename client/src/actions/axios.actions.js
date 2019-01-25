import axios from 'axios';
import {
	ERROR,
	SET_CURRENT_USER,
	AUTHENTICATE,
	SIGN_IN
} from 'actionTypes';

const API_URL = 'http://localhost:8001/';

const instance = axios.create({
	headers: {
		accept: 'application/json'
	}
});

export function setToken(token) {
	instance.defaults.headers.common['Authorization'] = `JWT ${token}`;
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
					type: ERROR
				});

				if (fail) {
					fail(error.response.data);
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
					type: ERROR
				});

				if (fail) {
					fail(error.response.data);
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
				const token = response.data.token;
				const user = {
					email: response.data.email,
					username: response.data.username
				};

				dispatch({
					type: SIGN_IN,
				});

				dispatch({
					type: AUTHENTICATE,
					payload: true
				});

				setToken(token);

				dispatch({
					type: SET_CURRENT_USER,
					payload: user
				});

				localStorage.setItem('token', JSON.stringify(token));

				if (success) {
					success(response.data);
				}
			})
			.catch((error) => {
				dispatch({
					payload: error.response.data,
					type: ERROR
				});

				if (fail) {
					fail(error.response.data);
				}
			});
	};
}
