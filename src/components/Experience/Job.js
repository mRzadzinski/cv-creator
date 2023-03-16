import React, { Component } from 'react';

export default class Job extends Component {
    constructor(props){
        super(props);
    }

	render() {
		const { userData } = this.props;

		return (
			<div className='Job'>
				<div className="job-info">
                    <div className='company left'>{userData.company}</div>
                    <div className='period right'>{userData.period}</div>
                </div>
				<div className="job-info">
                    <div className='position left'>{userData.position}</div>
                    <div className='location right'>{userData.location}</div>
                </div>
				<div className='job-description'>{userData.description}</div>
			</div>
		);
	}
}
