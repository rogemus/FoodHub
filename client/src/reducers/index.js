import { combineReducers } from 'redux';

import RecipesReducer from './recipes.reducer';
import CurrentUserReducer from './currentUser.reducer';
import NotificationReducer from './notification.reducer';

const rootReducer = combineReducers({
	recipes: RecipesReducer,
	currentUser: CurrentUserReducer,
	notification: NotificationReducer,
	recipe: {}
});

export default rootReducer;
