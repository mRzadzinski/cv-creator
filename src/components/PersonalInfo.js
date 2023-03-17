import React, { Component } from 'react';
import Name from './PersonalInfo/Name';
import JobTitle from './PersonalInfo/JobTitle';
import About from './PersonalInfo/About';
import ContactInfo from './PersonalInfo/ContactInfo';
import EditBtn from './edit-data/EditBtn';
import SaveBtn from './edit-data/SaveBtn';

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

				<SaveBtn />
			</div>
		);
	}
}
