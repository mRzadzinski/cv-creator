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

		let companyDefault;
		if (userData.company !== '') {
			companyDefault = userData.company;
		} else {
			companyDefault = '';
		}

		let periodDefault;
		if (userData.period !== '') {
			periodDefault = userData.period;
		} else {
			periodDefault = '';
		}

		let positionDefault;
		if (userData.position !== '') {
			positionDefault = userData.position;
		} else {
			positionDefault = '';
		}

		let locationDefault;
		if (userData.location !== '') {
			locationDefault = userData.location;
		} else {
			locationDefault = '';
		}

		let descriptionDefault;
		if (userData.description !== '') {
			descriptionDefault = userData.description;
		} else {
			descriptionDefault = '';
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
					defaultValue={companyDefault}
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
					defaultValue={periodDefault}
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
					defaultValue={positionDefault}
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
					defaultValue={locationDefault}
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
					defaultValue={descriptionDefault}
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
			company = <div className='company left'>{userData.company}</div>;
			period = <div className='period right'>{userData.period}</div>;
			position = <div className='position left'>{userData.position}</div>;
			location = <div className='location right'>{userData.location}</div>;
			description = (
				<div className='job-description'>{userData.description}</div>
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
