import { combineReducers } from 'redux';

import RecipesReducer from './recipes.reducer';
import UserReducer from './user.reducer';

const rootReducer = combineReducers({
	recipes: RecipesReducer,
	user: UserReducer,
	recipe: {}
});

export default rootReducer;
