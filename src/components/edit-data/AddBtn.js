import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export default class AddBtn extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { id } = this.props;

		return (
			<div className='addBtn' onClick={() => null} id={id}>
				<FontAwesomeIcon icon={faPlus} className='add-icon' />
			</div>
		);
	}
}
