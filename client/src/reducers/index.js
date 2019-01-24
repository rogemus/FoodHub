import { combineReducers } from 'redux';

import RecipesReducer from './recipes.reducer';
import Authentication from './authentication.reducer';

const rootReducer = combineReducers({
	recipes: RecipesReducer,
	auth: Authentication,
	recipe: {}
});

export default rootReducer;
