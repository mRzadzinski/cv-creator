import React, { useRef } from 'react';
import '../../styles/PersonalInfo/Name.scss';

const Name = (props) => {
	const { userData, editMode, updateData } = props;

	const nameInputRef = useRef(null);
	const surnameInputRef = useRef(null);

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
				onChange={() => updateData('name', nameInputRef.current.value)}
				type='text'
				defaultValue={nameDefaultValue}
				placeholder='Name'
				ref={nameInputRef}
			/>
		);

		surname = (
			<input
				className='name-input surname-input'
				onChange={() => updateData('surname', surnameInputRef.current.value)}
				type='text'
				defaultValue={surnameDefaultValue}
				placeholder='Surname'
				ref={surnameInputRef}
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
};

export default Name;
