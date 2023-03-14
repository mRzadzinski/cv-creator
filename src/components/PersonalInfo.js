import React, { Component } from 'react';
import Name from './PersonalInfo/Name';
import Position from './PersonalInfo/Position';
import About from './PersonalInfo/About';
import ContactInfo from './PersonalInfo/ContactInfo';

export default class PersonalInfo extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { defaultData } = this.props;

		return (
			<div className='PersonalInfo'>
				<div>
					<Name defaultName={defaultData} />
					<Position defaultPosition={defaultData.position} />
					<About defaultAbout={defaultData.about} />
				</div>
				<ContactInfo defaultContactInfo={defaultData} />
			</div>
		);
	}
}
