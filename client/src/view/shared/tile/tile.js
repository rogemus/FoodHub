import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card, Image } from 'semantic-ui-react';

export default class Tile extends Component {
	static propTypes = {
		name: PropTypes.string.isRequired,
		img: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired
	};

	static defaultProps = {
		name: '',
		img: 'https://loremflickr.com/450/450/salad',
		title: ''
	};

	render() {
		return (
			<Card>
				<Image src={`${this.props.img}?${this.props.name}`} alt={this.props.title} />
				<Card.Content>
					<Card.Header>
						<Link to={this.props.name}>
							{this.props.name}
						</Link>
					</Card.Header>
					<Card.Meta>
						<span className="date">Joined in 2015</span>
					</Card.Meta>
				</Card.Content>
			</Card>
		);
	}
}
