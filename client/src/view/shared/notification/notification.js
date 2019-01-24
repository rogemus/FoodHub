import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Message } from 'semantic-ui-react';
import { hide } from 'actions/notification.actions';
import PropTypes from 'prop-types';

export class Notification extends Component {
	static propTypes = {
		content: PropTypes.object,
		visible: PropTypes.bool.isRequired,
		hide: PropTypes.func.isRequired,
	};

	static defaultProps = {
		content: {}
	};

	handleClose = () => {
		this.props.hide();
	}

	render() {
		if (!this.props.visible) {
			return null;
		}

		return (
			<div className="notification">
				<Message
					onDismiss={this.handleClose}
					{...this.props.content}
				/>
			</div>
		);
	}
}

const mapStateToProp = (state) => ({
	content: state.notification.content,
	visible: state.notification.visible
});

export default connect(mapStateToProp, {hide})(Notification);
