import { GET_RECIPES, GET_RECIPE_DETAILS, POST_RECIPE } from 'actionTypes';
import { get, post } from './axios.actions';

export function getRecipes() {
	const config = {
		path: 'api/recipes/',
		type: GET_RECIPES
	};

	return get(config.path, {}, config.type);
}

export function getRecipeDetails(id) {
	const config = {
		path: `api/recipes/${id}`,
		type: GET_RECIPE_DETAILS,
		params: id,
	};

	return get(config.path, {}, config.type);
}

export function postRecipes(data) {
	const config = {
		path: 'api/recipes/',
		type: POST_RECIPE,
		data,
		conf: {
			data,
			headers: {
				'Content-Type': 'multipart/form-data'
			}
		}
	};

	return post(config.path, config.conf, config.type);
}
