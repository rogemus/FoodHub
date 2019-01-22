import React, { Component } from 'react';
import uuid from '../../../helpers/uuid.helper';

import Tile from '../../shared/tile/tile';

const list = [
	{
		title: 'Recipe 1',
		name: 'recipe-1'
	},
	{
		title: 'Recipe 2',
		name: 'recipe-2'
	},
	{
		title: 'Recipe 3',
		name: 'recipe-4'
	},
	{
		title: 'Recipe 5',
		name: 'recipe-5'
	},
	{
		title: 'Recipe 6',
		name: 'recipe-6'
	},
	{
		title: 'Recipe 7',
		name: 'recipe-7'
	},
	{
		title: 'Recipe 8',
		name: 'recipe-8'
	}
];

export default class HomePage extends Component {
	renderTiles() {
		return list.map(item => {
			const id = uuid();

			return <Tile {...item} key={id} />;
		});
	}

	render() {
		return (
			<div className="page-wrapper">
				<div className="tiles">{this.renderTiles()}</div>
			</div>
		);
	}
}
