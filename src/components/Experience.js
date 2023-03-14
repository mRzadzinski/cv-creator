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

				{defaultData.jobs.map((job, index) => (
					<Job key={uniqid()} defaultData={defaultData.jobs[index]} />
				))}

				<div className='header'>Education</div>
				<Job defaultData={defaultData.education} />

				<div className='header'>Skills</div>
				<ul>
					{defaultData.skills.map((skill) => (
						<li key={uniqid()} className='skill'>
							{skill}
						</li>
					))}
				</ul>

				<div className='header'>Hobbies</div>
				<div className='hobbies'>{defaultData.hobbies}</div>
			</div>
		);
	}
}
