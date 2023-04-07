import React, { useRef } from 'react';
import '../../styles/PersonalInfo/About.scss';

const About = (props) => {
	const { userData, editMode, updateData } = props;
	
	const aboutInputRef = useRef(null);
	const defaultAbout =
		'Some information about you. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque laoreet turpis in molestie fringilla. Phasellus at lorem eget sem egestas ullamcorper.';

	let aboutDefaultValue;
	if (userData.about !== '') {
		aboutDefaultValue = userData.about;
	} else {
		aboutDefaultValue = '';
	}

	let about;
	if (editMode) {
		about = (
			<textarea
				className='about-input'
				rows={8}
				placeholder='About'
				ref={aboutInputRef}
				defaultValue={aboutDefaultValue}
				onChange={() => updateData('about', aboutInputRef.current.value)}
			/>
		);
	} else {
		if (userData.about !== '') {
			about = <div className='about-info'>{userData.about}</div>;
		} else {
			about = <div className='about-info'>{defaultAbout}</div>;
		}
	}

	return (
		<div className='About'>
			<div className='about'>About</div>
			{about}
		</div>
	);
};

export default About;
