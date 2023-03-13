import React, { Component } from 'react';
import obiWanInfo from '../obi-wan-info';
import Name from './PersonalInfo/Name';
import Position from './PersonalInfo/Position';
import About from './PersonalInfo/About';
import ContactInfo from './PersonalInfo/ContactInfo';


export default class PersonalInfo  extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
      <div className='PersonalInfo'>
        <div>
			<Name defaultName={obiWanInfo} />
			<Position defaultPosition={obiWanInfo.position} />
			<About defaultAbout={obiWanInfo.about} />
		</div>
		<ContactInfo defaultContactInfo={obiWanInfo} />
      </div>
    );
	}
}