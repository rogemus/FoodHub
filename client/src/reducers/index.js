import { combineReducers } from 'redux';

import RecipesReducer from './recipes.reducer';
import UserReducer from './user.reducer';
import NotificationReducer from './notification.reducer';

const rootReducer = combineReducers({
	recipes: RecipesReducer,
	user: UserReducer,
	notification: NotificationReducer,
	recipe: {}
});

export default rootReducer;
