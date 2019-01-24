import { GET_CURRENT_USER_DETAILS } from 'actionTypes';
import { get } from './axios.actions';

export function getCurrentUserDetails() {
	const config = {
		path: 'accounts/me',
		type: GET_CURRENT_USER_DETAILS
	};

	return get(config.path, {}, config.type);
}
