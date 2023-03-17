import React, { Component } from 'react';

export default class EditBtn extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className='EditBtn'>
				<span class='material-symbols-outlined' id='edit-sign' title='Edit'>edit</span>
			</div>
		);
	}
}
