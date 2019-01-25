import { GET_RECIPES, GET_RECIPE_DETAILS } from 'actionTypes';

const INITIAL_STATE = {
	list: [],
	details: {}
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case GET_RECIPES:
			return { ...state, list: action.payload };
		case GET_RECIPE_DETAILS:
			return { ...state, details: action.payload };
	}

	return state;
};
