import { SHOW_NOTIFICATION, HIDE_NOTIFICATION } from 'actionTypes';

const INITIAL_STATE = {
	visible: false,
	content: undefined
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case SHOW_NOTIFICATION: {
			return {
				...state,
				visible: true,
				content: action.payload
			};
		}
		case HIDE_NOTIFICATION: {
			return {
				...state,
				visible: false,
				content: undefined
			};
		}
	}

	return state;
};
