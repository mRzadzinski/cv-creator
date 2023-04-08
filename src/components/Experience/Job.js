import React, { useRef } from 'react';
import DeleteBtn from '../edit-data/DeleteBtn';

const Job = (props) => {
	const { userData, editMode, updateData, deleteData, propName, id } = props;

	const companyInput = useRef(null);
	const periodInput = useRef(null);
	const positionInput = useRef(null);
	const locationInput = useRef(null);
	const descriptionInput = useRef(null);

	let companyDefaultInput;
	let companyDefault;

	if (userData.company !== '') {
		companyDefaultInput = userData.company;
		companyDefault = userData.company;
	} else {
		companyDefaultInput = '';
		if (propName === 'jobs') {
			companyDefault = 'Company Name';
		} else if (propName === 'education') {
			companyDefault = 'School Name';
		}
	}

	let periodDefaultInput;
	let periodDefault;
	if (userData.period !== '') {
		periodDefaultInput = userData.period;
		periodDefault = userData.period;
	} else {
		periodDefaultInput = '';
		periodDefault = 'Time Period';
	}

	let positionDefaultInput;
	let positionDefault;
	if (userData.position !== '') {
		positionDefaultInput = userData.position;
		positionDefault = userData.position;
	} else {
		positionDefaultInput = '';
		if (propName === 'jobs') {
			positionDefault = 'Job Title';
		} else if (propName === 'education') {
			positionDefault = 'Course Name / Profile';
		}
	}

	let locationDefaultInput;
	let locationDefault;
	if (userData.location !== '') {
		locationDefaultInput = userData.location;
		locationDefault = userData.location;
	} else {
		locationDefaultInput = '';
		locationDefault = 'Location';
	}

	let descriptionDefaultInput;
	let descriptionDefault;
	if (userData.description !== '') {
		descriptionDefaultInput = userData.description;
		descriptionDefault = userData.description;
	} else {
		descriptionDefaultInput = '';
		if (propName === 'jobs') {
			descriptionDefault = '';
		} else if (propName === 'education') {
			descriptionDefault = '';
		}
	}

	let company;
	let period;
	let position;
	let location;
	let description;
	let deleteBtn;
	if (editMode) {
		company = (
			<input
				id='company-input'
				type='text'
				placeholder={companyDefault}
				ref={companyInput}
				defaultValue={companyDefaultInput}
				onChange={() =>
					updateData(propName, companyInput.current.value, 'company', id)
				}
			/>
		);
		period = (
			<input
				id='period-input'
				type='text'
				placeholder='Period'
				ref={periodInput}
				defaultValue={periodDefaultInput}
				onChange={() =>
					updateData(propName, periodInput.current.value, 'period', id)
				}
			/>
		);
		position = (
			<input
				id='position-input'
				type='text'
				placeholder={positionDefault}
				ref={positionInput}
				defaultValue={positionDefaultInput}
				onChange={() =>
					updateData(propName, positionInput.current.value, 'position', id)
				}
			/>
		);
		location = (
			<input
				id='location-input'
				type='text'
				placeholder='Location'
				ref={locationInput}
				defaultValue={locationDefaultInput}
				onChange={() =>
					updateData(propName, locationInput.current.value, 'location', id)
				}
			/>
		);
		description = (
			<textarea
				id='description-input'
				rows={3}
				placeholder='Description'
				ref={descriptionInput}
				defaultValue={descriptionDefaultInput}
				onChange={() =>
					updateData(
						propName,
						descriptionInput.current.value,
						'description',
						id
					)
				}
			/>
		);
		deleteBtn = (
			<DeleteBtn
				dataPropName={propName}
				id={id}
				styleName='delete-job-btn'
				deleteData={deleteData}
			/>
		);
	} else {
		company = <div className='company left'>{companyDefault}</div>;
		period = <div className='period right'>{periodDefault}</div>;
		position = <div className='position left'>{positionDefault}</div>;
		location = <div className='location right'>{locationDefault}</div>;
		description = <div className='job-description'>{descriptionDefault}</div>;
		deleteBtn = null;
	}

	return (
		<div className='Job'>
			<div className='job-info'>
				{company}
				{period}
			</div>
			<div className='job-info'>
				{position}
				{location}
			</div>
			{description}
			{deleteBtn}
		</div>
	);
};

export default Job;
