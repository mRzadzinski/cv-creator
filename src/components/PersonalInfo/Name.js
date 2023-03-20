import React, { Component } from 'react';

export default class Name extends Component {
	render() {
		const { userData, editMode, updateData } = this.props;

		let nameDefaultValue;
		if (userData.name !== '') {
			nameDefaultValue = userData.name;
		} else {
			nameDefaultValue = '';
		}

		let surnameDefaultValue;
		if (userData.surname !== '') {
			surnameDefaultValue = userData.surname;
		} else {
			surnameDefaultValue = '';
		}

		let name;
		let surname;
		if (editMode) {
			name = (
				<input
					className='name-input'
					type='text'
					defaultValue={nameDefaultValue}
					placeholder='Name'
				/>
			);

			surname = (
				<input
					className='name-input surname-input'
					type='text'
					defaultValue={surnameDefaultValue}
					placeholder='Surname'
				/>
			);
		} else {
			name = <div className='name'>{nameDefaultValue}</div>;
			surname = <div className='surname'>{surnameDefaultValue}</div>;
		}

		return (
			<div className='Name'>
				{name}
				{surname}
			</div>
		);
	}
}
