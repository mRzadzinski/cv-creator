import React, { Component } from 'react';
import obiWanInfo from './obi-wan-info';
import Experience from './components/Experience';
import PersonalInfo from './components/PersonalInfo';
import Photo from './components/Photo';
import './styles/App.scss';
import './styles/Photo.scss';
import './styles/PersonalInfo.scss';
import './styles/Experience.scss';
import './styles/PersonalInfo/Name.scss';
import './styles/PersonalInfo/Position.scss';
import './styles/PersonalInfo/About.scss';
import './styles/PersonalInfo/ContactInfo.scss';
import './styles/Experience/Job.scss'


class App extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className='App'>
				<Experience defaultData={obiWanInfo} />
				<PersonalInfo defaultData={obiWanInfo} />
				<Photo />
			</div>
		);
	}
}

export default App;
