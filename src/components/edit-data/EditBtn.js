import React, { Component } from 'react';

export default class EditBtn extends Component {
	constructor(props) {
		super(props);

		this.editBtnRef = React.createRef();
	}

	render() {
		const { toggleEditMode } = this.props;

		return (
			<div className='EditBtn' onClick={() => toggleEditMode()} ref={this.editBtnRef}>
				<span className='material-symbols-outlined' id='edit-sign' title='Edit'>
					edit
				</span>
			</div>
		);
	}
}
