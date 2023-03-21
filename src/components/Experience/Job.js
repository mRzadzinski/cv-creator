import React, { Component } from 'react';

export default class Job extends Component {
	constructor(props) {
		super(props);

		this.companyInput = React.createRef();
		this.periodInput = React.createRef();
		this.positionInput = React.createRef();
		this.locationInput = React.createRef();
		this.descriptionInput = React.createRef();
	}

	render() {
		const { userData, editMode, updateData, expType, expIndex } = this.props;

		let companyDefaultInput;
		let companyDefault;
		if (userData.company !== '') {
			companyDefaultInput = userData.company;
			companyDefault = userData.company;
		} else {
			companyDefaultInput = '';
			if (expType === 'jobs') {
				companyDefault = 'Company Name';
			} else if (expType === 'education') {
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
			if (expType === 'jobs') {
				positionDefault = 'Job Title';
			} else if (expType === 'education') {
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
			if (expType === 'jobs') {
				descriptionDefault = 'Description of this job.';
			} else if (expType === 'education') {
				descriptionDefault = '';
			}
		}

		let company;
		let period;
		let position;
		let location;
		let description;
		if (editMode) {
			company = (
				<input
					id='company-input'
					type='text'
					placeholder='Company'
					ref={this.companyInput}
					defaultValue={companyDefaultInput}
					onChange={() =>
						updateData(
							'company',
							this.companyInput.current.value,
							expType,
							expIndex
						)
					}
				/>
			);
			period = (
				<input
					id='period-input'
					type='text'
					placeholder='Period'
					ref={this.periodInput}
					defaultValue={periodDefaultInput}
					onChange={() =>
						updateData(
							'period',
							this.periodInput.current.value,
							expType,
							expIndex
						)
					}
				/>
			);
			position = (
				<input
					id='position-input'
					type='text'
					placeholder='Position'
					ref={this.positionInput}
					defaultValue={positionDefaultInput}
					onChange={() =>
						updateData(
							'position',
							this.positionInput.current.value,
							expType,
							expIndex
						)
					}
				/>
			);
			location = (
				<input
					id='location-input'
					type='text'
					placeholder='Location'
					ref={this.locationInput}
					defaultValue={locationDefaultInput}
					onChange={() =>
						updateData(
							'location',
							this.locationInput.current.value,
							expType,
							expIndex
						)
					}
				/>
			);
			description = (
				<textarea
					id='description-input'
					rows={3}
					placeholder='Description'
					ref={this.descriptionInput}
					defaultValue={descriptionDefaultInput}
					onChange={() =>
						updateData(
							'description',
							this.descriptionInput.current.value,
							expType,
							expIndex
						)
					}
				/>
			);
		} else {
			company = <div className='company left'>{companyDefault}</div>;
			period = <div className='period right'>{periodDefault}</div>;
			position = <div className='position left'>{positionDefault}</div>;
			location = <div className='location right'>{locationDefault}</div>;
			description = (
				<div className='job-description'>{descriptionDefault}</div>
			);
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
			</div>
		);
	}
}
