import React, { Component } from 'react';
import Job from './Experience/Job';
import EditBtn from './edit-data/EditBtn';
import uniqid from 'uniqid';

export default class Experience extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { userData } = this.props;

		return (
			<div className='Experience'>
				<div className='header'>Experience</div>

				<div className="exp-content">
					{userData.jobs.map((job, index) => (
						<Job key={uniqid()} userData={userData.jobs[index]} />
					))}
				</div>

				<div className='header'>Education</div>
				<div className="exp-content">
					<Job userData={userData.education} />
				</div>

				<div className='header'>Skills</div>
				<div className="exp-content">
					<ul>
						{userData.skills.map((skill) => (
							<li key={uniqid()} className='skill'>
								{skill}
							</li>
						))}
					</ul>
				</div>

				<div className='header'>Hobbies</div>
				<div className="exp-content">
					<div className='hobbies'>{userData.hobbies}</div>
				</div>

				<EditBtn />
			</div>
		);
	}
}
