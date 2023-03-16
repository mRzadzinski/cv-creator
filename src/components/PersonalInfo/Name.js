import React, { Component } from 'react';

export default class Name extends Component {
	render() {
		const { userData } = this.props;

		let name;
		if (userData.name !== '') {
			name = <div className='name'>{userData.name}</div>;
		} else {
			name = <div className='name'>Name</div>;
		}

		let surname;
		if (userData.surname !== '') {
			surname = <div className='surname'>{userData.surname}</div>;
		} else {
			surname = <div className='surname'>Surname</div>;
		}

		return (
			<div className='Name'>
				{name}
				{surname}
			</div>
		);
	}
}
