import React, { Component } from 'react';

export default class Job extends Component {
    constructor(props){
        super(props);
    }

	render() {
		const { defaultData } = this.props;

		return (
			<div className='Job'>
				<div className="job-info">
                    <div className='company left'>{defaultData.company}</div>
                    <div className='period right'>{defaultData.period}</div>
                </div>
				<div className="job-info">
                    <div className='position left'>{defaultData.position}</div>
                    <div className='location right'>{defaultData.location}</div>
                </div>
				<div className='job-description'>{defaultData.description}</div>
			</div>
		);
	}
}
