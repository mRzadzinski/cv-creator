import React, { Component } from 'react';

export default class EditBtn extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { toggleEditMode } = this.props;

		return (
			<div className='EditBtn' onClick={() => toggleEditMode()}>
				<span className='material-symbols-outlined' id='edit-sign' title='Edit'>
					edit
				</span>
			</div>
		);
	}
}
