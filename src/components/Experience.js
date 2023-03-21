import React, { Component } from 'react';
import Job from './Experience/Job';
import EditBtn from './edit-data/EditBtn';
import SaveBtn from './edit-data/SaveBtn';
import uniqid from 'uniqid';

export default class Experience extends Component {
	constructor(props) {
		super(props);

		this.state = {
			editMode: true,
		};

		this.editBtnRef = React.createRef();
		this.hobbiesInput = React.createRef();

		this.showEditBtn = this.showEditBtn.bind(this);
		this.hideEditBtn = this.hideEditBtn.bind(this);
		this.toggleEditMode = this.toggleEditMode.bind(this);
	}

	showEditBtn() {
		if (!this.state.editMode) {
			this.editBtnRef.current.editBtnRef.current.style.visibility = 'visible';
		}
	}

	hideEditBtn() {
		if (!this.state.editMode) {
			this.editBtnRef.current.editBtnRef.current.style.visibility = 'hidden';
		}
	}

	toggleEditMode() {
		if (this.state.editMode) {
			this.setState({
				editMode: false,
			});
		} else {
			this.setState({
				editMode: true,
			});
		}
	}

	render() {
		const { userData, updateData } = this.props;
		const { editMode } = this.state;

		let cornerButton;
		if (editMode) {
			cornerButton = <SaveBtn toggleEditMode={this.toggleEditMode} />;
		} else {
			cornerButton = (
				<EditBtn toggleEditMode={this.toggleEditMode} ref={this.editBtnRef} />
			);
		}

		let hobbiesDefault;
		if (userData.hobbies !== '') {
			hobbiesDefault = userData.hobbies;
		} else {
			hobbiesDefault = '';
		}

		let hobbies;
		if (editMode) {
			hobbies = (
				<textarea
					id='hobbies-input'
					rows={3}
					placeholder='Hobbies'
					ref={this.hobbiesInput}
					defaultValue={hobbiesDefault}
					onChange={() =>
						updateData('hobbies', this.hobbiesInput.current.value)
					}
				/>
			);
		} else {
			hobbies = <div className='hobbies'>{userData.hobbies}</div>;
		}

		return (
			<div
				className='Experience'
				onMouseEnter={() => this.showEditBtn()}
				onMouseLeave={() => this.hideEditBtn()}
			>
				<div className='header'>Experience</div>

				<div className='exp-content'>
					{userData.jobs.map((job, index) => (
						<Job
							key={index}
							userData={userData.jobs[index]}
							editMode={editMode}
							updateData={updateData}
							expType='jobs'
							expIndex={index}
						/>
					))}
				</div>

				<div className='header'>Education</div>
				<div className='exp-content'>
					{userData.education.map((edu, index) => (
						<Job
							key={index}
							userData={userData.education[index]}
							editMode={editMode}
							updateData={updateData}
							expType='education'
							expIndex={index}
						/>
					))}
				</div>

				<div className='header'>Skills</div>
				<div className='exp-content'>
					<ul>
						{userData.skills.map((skill, index) => (
							<li key={index} className='skill'>
								{skill}
							</li>
						))}
					</ul>
				</div>

				<div className='header'>Hobbies</div>
				<div className='exp-content'>{hobbies}</div>

				{cornerButton}
			</div>
		);
	}
}
