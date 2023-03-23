import React, { Component } from 'react';
import Job from './Experience/Job';
import Skill from './Experience/Skill';
import EditBtn from './edit-data/EditBtn';
import SaveBtn from './edit-data/SaveBtn';
import AddBtn from './edit-data/AddBtn';

export default class Experience extends Component {
	constructor(props) {
		super(props);

		this.state = {
			editMode: false,
		};

		this.editBtnRef = React.createRef();
		this.addBtnRef = React.createRef();
		this.hobbiesInput = React.createRef();
		this.skillsInput = React.createRef();

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
		const { userData, updateData, addData, deleteData } = this.props;
		const { editMode } = this.state;

		let cornerButton;
		let addJobBtn;
		let addEduBtn;
		let addSkillBtn;
		if (editMode) {
			cornerButton = <SaveBtn toggleEditMode={this.toggleEditMode} />;
			addJobBtn = <AddBtn addData={addData} addDataParam='jobs' />;
			addEduBtn = <AddBtn addData={addData} addDataParam='education' />;
			addSkillBtn = (
				<AddBtn id='add-skill' addData={addData} addDataParam='skills' />
			);
		} else {
			cornerButton = (
				<EditBtn toggleEditMode={this.toggleEditMode} ref={this.editBtnRef} />
			);
			addJobBtn = null;
			addEduBtn = null;
			addSkillBtn = null;
		}

		let hobbiesDefaultInput;
		let hobbiesDefault;
		if (userData.hobbies !== '') {
			hobbiesDefaultInput = userData.hobbies;
			hobbiesDefault = userData.hobbies;
		} else {
			hobbiesDefaultInput = '';
			hobbiesDefault = 'Some interesting things you do besides work.';
		}

		let hobbies;
		if (editMode) {
			hobbies = (
				<textarea
					id='hobbies-input'
					rows={3}
					placeholder='Hobbies'
					ref={this.hobbiesInput}
					defaultValue={hobbiesDefaultInput}
					onChange={() =>
						updateData('hobbies', this.hobbiesInput.current.value)
					}
				/>
			);
		} else {
			hobbies = <div className='hobbies'>{hobbiesDefault}</div>;
		}

		return (
			<div
				className='Experience'
				onMouseEnter={() => this.showEditBtn()}
				onMouseLeave={() => this.hideEditBtn()}
			>
				<div className='header'>Experience</div>

				<div className='exp-content'>
					{userData.jobs.map((job) => (
						<Job
							editMode={editMode}
							updateData={updateData}
							deleteData={deleteData}
							propName='jobs'
							userData={job}
							id={job.id}
							key={job.id}
						/>
					))}
				</div>
				{addJobBtn}

				<div className='header'>Education</div>
				<div className='exp-content'>
					{userData.education.map((edu) => (
						<Job
							editMode={editMode}
							updateData={updateData}
							deleteData={deleteData}
							propName='education'
							userData={edu}
							id={edu.id}
							key={edu.id}
						/>
					))}
				</div>
				{addEduBtn}

				<div className='header'>Skills</div>
				<div className='exp-content'>
					<ul className='skills'>
						{userData.skills.map((skillObj) => (
							<li className='skill' key={skillObj.id}>
								<Skill
									editMode={editMode}
									updateData={updateData}
									deleteData={deleteData}
									userData={skillObj.skill}
									id={skillObj.id}
									key={skillObj.id}
								/>
							</li>
						))}
					</ul>
				</div>
				{addSkillBtn}

				<div className='header'>Hobbies</div>
				<div className='exp-content'>{hobbies}</div>

				{cornerButton}
			</div>
		);
	}
}
