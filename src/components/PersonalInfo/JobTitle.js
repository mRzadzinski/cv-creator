import React, { useRef } from 'react';
import '../../styles/PersonalInfo/JobTitle.scss';

const JobTitle = (props) => {
	const { userData, editMode, updateData } = props;
	
	const jobTitleInputRef = useRef(null);

	let jobTitleDefaultValue;
	if (userData.jobTitle !== '') {
		jobTitleDefaultValue = userData.jobTitle;
	} else {
		jobTitleDefaultValue = '';
	}

	let jobTitle;
	if (editMode) {
		jobTitle = (
			<input
				className='jobTitle-input'
				type='text'
				placeholder='Job Title'
				ref={jobTitleInputRef}
				defaultValue={jobTitleDefaultValue}
				onChange={() => updateData('jobTitle', jobTitleInputRef.current.value)}
			/>
		);
	} else {
		if (userData.jobTitle !== '') {
			jobTitle = <div className='JobTitle'>{userData.jobTitle}</div>;
		} else {
			jobTitle = <div className='JobTitle'>Job Title</div>;
		}
	}

	return <div className='JobTitle'>{jobTitle}</div>;
};

export default JobTitle;
