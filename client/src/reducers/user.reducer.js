import { SET_CURRENT_USER, AUTHENTICATE} from 'actionTypes';

const INITIAL_STATE = {
	current: {},
	authenticated: false,
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case SET_CURRENT_USER:
			return { ...state, current: action.payload };

		case AUTHENTICATE:
			return { ...state, authenticated: action.payload };
	}

	return state;
};
