import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Image from 'semantic-ui-react/dist/es/elements/Image';
import Card from 'semantic-ui-react/dist/es/views/Card';

export default class Tile extends Component {
	static propTypes = {
		id: PropTypes.number.isRequired,
		image: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		author: PropTypes.string.isRequired,
	};

	static defaultProps = {
		id: '',
		image: 'https://loremflickr.com/450/450/salad',
		title: '',
		author: ''
	};

	render() {
		return (
			<Card>
				<Image src={this.props.image} alt={this.props.title} />
				<Card.Content>
					<Card.Header>
						<Link to={`/recipes/${this.props.id}`}>
							{this.props.title}
						</Link>
					</Card.Header>
					<Card.Meta>
						<strong>Created by</strong> {this.props.author}
					</Card.Meta>
				</Card.Content>
			</Card>
		);
	}
}
