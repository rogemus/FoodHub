import { SHOW_NOTIFICATION, HIDE_NOTIFICATION } from 'actionTypes';

export function show(content) {
	return dispatch => (
		dispatch({
			type: SHOW_NOTIFICATION,
			payload: content
		})
	);
}

export function hide() {
	return dispatch => (
		dispatch({
			type: HIDE_NOTIFICATION
		})
	);
}
