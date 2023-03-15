import React, { Component } from 'react';
import obiWanInfo from './user-data/obi-wan-data';
import dataBoilerplate from './user-data/data-boilerplate';
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
import './styles/options-bar/icons.scss';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			// Mode 'demo' or 'user'
			mode: 'demo',
			userInfo: Object.assign({}, obiWanInfo),
		};
	}

	eraseForm() {
		const boilerplateCopy = Object.assign({}, dataBoilerplate);

		this.setState({
			mode: 'user',
			userInfo: boilerplateCopy,
		});
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
