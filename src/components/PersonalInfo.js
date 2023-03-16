import React, { Component } from 'react';
import Name from './PersonalInfo/Name';
import JobTitle from './PersonalInfo/JobTitle';
import About from './PersonalInfo/About';
import ContactInfo from './PersonalInfo/ContactInfo';

export default class PersonalInfo extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { userData } = this.props;

		return (
			<div className='PersonalInfo'>
				<div className='name-title-about'>
					<Name userData={userData} />
					<JobTitle userData={userData} />
					<About userData={userData} />
				</div>
				<ContactInfo userData={userData} />
			</div>
		);
	}
}
