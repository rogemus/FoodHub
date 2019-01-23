import { GET_RECIPES } from 'actionTypes';
const list = [
	{
		title: 'Recipe 1',
		description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique, esse?'
	},
	{
		title: 'Recipe 2',
		description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique, esse?'
	},
	{
		title: 'Recipe 3',
		description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique, esse?'
	}
];

export function getRecipes() {
	return dispatch => {
		return dispatch({
			payload: list,
			type: GET_RECIPES
		});
	};
}
