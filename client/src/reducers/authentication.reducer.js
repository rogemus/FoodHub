import { AUTHENTICATE } from 'actionTypes';

const INITIAL_STATE = {
	authenticated: false,
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case AUTHENTICATE:
			return { ...state, authenticated: action.payload };
	}

	return state;
};
