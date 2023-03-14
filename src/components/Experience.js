import React, { Component } from 'react';
import Job from './Experience/Job';
import uniqid from 'uniqid';

export default class Experience extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { defaultData } = this.props;

		return (
			<div className='Experience'>
				<div className='header'>Experience</div>

				<div className="exp-content">
					{defaultData.jobs.map((job, index) => (
						<Job key={uniqid()} defaultData={defaultData.jobs[index]} />
					))}
				</div>

				<div className='header'>Education</div>
				<div className="exp-content">
					<Job defaultData={defaultData.education} />
				</div>

				<div className='header'>Skills</div>
				<div className="exp-content">
					<ul>
						{defaultData.skills.map((skill) => (
							<li key={uniqid()} className='skill'>
								{skill}
							</li>
						))}
					</ul>
				</div>

				<div className='header'>Hobbies</div>
				<div className="exp-content">
					<div className='hobbies'>{defaultData.hobbies}</div>
				</div>
			</div>
		);
	}
}
