import React, { Component } from 'react';
import Job from './Experience/Job';
import EditBtn from './edit-data/EditBtn';
import SaveBtn from './edit-data/SaveBtn';
import uniqid from 'uniqid';

export default class Experience extends Component {
	constructor(props) {
		super(props);

		this.state = {
			editMode: false,
		};

		this.editBtnRef = React.createRef();

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

		return (
			<div
				className='Experience'
				onMouseEnter={() => this.showEditBtn()}
				onMouseLeave={() => this.hideEditBtn()}
			>
				<div className='header'>Experience</div>

				<div className='exp-content'>
					{userData.jobs.map((job, index) => (
						<Job key={uniqid()} userData={userData.jobs[index]} />
					))}
				</div>

				<div className='header'>Education</div>
				<div className='exp-content'>
					<Job userData={userData.education} />
				</div>

				<div className='header'>Skills</div>
				<div className='exp-content'>
					<ul>
						{userData.skills.map((skill) => (
							<li key={uniqid()} className='skill'>
								{skill}
							</li>
						))}
					</ul>
				</div>

				<div className='header'>Hobbies</div>
				<div className='exp-content'>
					<div className='hobbies'>{userData.hobbies}</div>
				</div>

				{cornerButton}
			</div>
		);
	}
}
