import React, { Component } from 'react';
import '../../styles/edit-data/EditBtns.scss';

export default class SaveBtn extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { toggleEditMode } = this.props;

		return (
			<div className='SaveBtn' onClick={() => toggleEditMode()}>
				<span className='material-symbols-outlined' id='save-sign' title='Save'>
					done
				</span>
			</div>
		);
	}
}
