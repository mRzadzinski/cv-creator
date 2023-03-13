import React, { Component } from 'react';
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


class App extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className='App'>
				<Experience />
				<PersonalInfo />
				<Photo />
			</div>
		);
	}
}

export default App;
