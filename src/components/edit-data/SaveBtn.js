import React, { Component } from 'react';

export default class SaveBtn extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className='SaveBtn'>
				<span class='material-symbols-outlined' id='save-sign' title='Save'>done</span>
			</div>
		);
	}
}
