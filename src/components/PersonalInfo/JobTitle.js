import React, { Component } from 'react';
import '../../styles/PersonalInfo/JobTitle.scss';

export default class JobTitle extends Component {
	constructor(props) {
		super(props);

		this.jobTitleInputRef = React.createRef();
	}

	render() {
		const { userData, editMode, updateData } = this.props;

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
					ref={this.jobTitleInputRef}
					defaultValue={jobTitleDefaultValue}
					onChange={() =>
						updateData('jobTitle', this.jobTitleInputRef.current.value)
					}
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
	}
}
