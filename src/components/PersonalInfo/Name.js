import React, { Component } from 'react';

export default class Name extends Component {
	render() {
		const { userData, editMode, updateData } = this.props;

		let name;
		let surname;
		if (editMode) {
			if (userData.name !== '') {
				name = (
					<input
						className='name-input'
						type='text'
						defaultValue={userData.name}
						placeholder='Name'
					/>
				);
			} else {
				name = (
					<input
						className='name-input'
						type='text'
						defaultValue=''
						placeholder='Name'
					/>
				);
			}

			if (userData.surname !== '') {
				surname = (
					<input
						className='name-input surname-input'
						type='text'
						defaultValue={userData.surname}
						placeholder='Surname'
					/>
				);
			} else {
				surname = (
					<input
						className='name-input surname-input'
						type='text'
						defaultValue=''
						placeholder='Surname'
					/>
				);
			}
		} else {
			if (userData.name !== '') {
				name = <div className='name'>{userData.name}</div>;
			} else {
				name = <div className='name'>Name</div>;
			}

			if (userData.surname !== '') {
				surname = <div className='surname'>{userData.surname}</div>;
			} else {
				surname = <div className='surname'>Surname</div>;
			}
		}

		return (
			<div className='Name'>
				{name}
				{surname}
			</div>
		);
	}
}
