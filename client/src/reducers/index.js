import { combineReducers } from 'redux';

import RecipesReducer from './recipes.reducer';

const rootReducer = combineReducers({
	recipes: RecipesReducer,
	recipe: {}
});

export default rootReducer;
