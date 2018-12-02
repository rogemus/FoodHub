import { GET_RECIPES } from '../actions/types';

const INITIAL_STATE = {
	list: []
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case GET_RECIPES:
			return { ...state, list: action.payload };
	}

	return state;
};
