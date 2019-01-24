import { SET_CURRENT_USER, AUTHENTICATE, GET_CURRENT_USER_DETAILS} from 'actionTypes';

const INITIAL_STATE = {
	current: {},
	authenticated: false,
	details: {}
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case SET_CURRENT_USER:
			return { ...state, current: action.payload };

		case AUTHENTICATE:
			return { ...state, authenticated: action.payload };

		case GET_CURRENT_USER_DETAILS:
			return { ...state, details: action.payload };
	}

	return state;
};
