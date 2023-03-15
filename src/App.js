import React, { Component } from 'react';
import obiWanInfo from './personal-info/obi-wan-info';
import infoBoilerplate from './personal-info/info-boilerplate';
import Experience from './components/Experience';
import PersonalInfo from './components/PersonalInfo';
import Options from './Options';
import Photo from './components/Photo';
import './styles/App.scss';
import './styles/Photo.scss';
import './styles/PersonalInfo.scss';
import './styles/Experience.scss';
import './styles/Options.scss';
import './styles/PersonalInfo/Name.scss';
import './styles/PersonalInfo/Position.scss';
import './styles/PersonalInfo/About.scss';
import './styles/PersonalInfo/ContactInfo.scss';
import './styles/Experience/Job.scss';
import './styles/options-bar/buttons.scss';
import './styles/options-bar/magnifying-glass.scss';


class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			userInfo: obiWanInfo,
		};
	}

	render() {
		const { userInfo } = this.state;

		return (
			<div className='App'>
				<Options />
				<div className='cv'>
					<Experience defaultData={userInfo} />
					<PersonalInfo defaultData={userInfo} />
					<Photo />
				</div>
			</div>
		);
	}
}

export default App;
