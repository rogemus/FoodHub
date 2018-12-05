import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

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
			<div className="tile">
				<div className="tile-img">
					<img src={`${this.props.img}?${this.props.name}`} alt={this.props.title} />
				</div>
				<div className="tile-title">
					<Link to={this.props.name}>
						<h2>{this.props.title}</h2>
					</Link>
				</div>
			</div>
		);
	}
}
