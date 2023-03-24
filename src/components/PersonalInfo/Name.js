import React, { Component } from 'react';
import '../../styles/PersonalInfo/Name.scss';

export default class Name extends Component {
	constructor(props) {
		super(props);

		this.nameInputRef = React.createRef();
		this.surnameInputRef = React.createRef();
	}

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
					onChange={() => updateData('name', this.nameInputRef.current.value)}
					type='text'
					defaultValue={nameDefaultValue}
					placeholder='Name'
					ref={this.nameInputRef}
				/>
			);

			surname = (
				<input
					className='name-input surname-input'
					onChange={() =>
						updateData('surname', this.surnameInputRef.current.value)
					}
					type='text'
					defaultValue={surnameDefaultValue}
					placeholder='Surname'
					ref={this.surnameInputRef}
				/>
			);
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
