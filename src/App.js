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
import './styles/Experience/Job.scss';
import './styles/options-bar/buttons.scss';
import './styles/options-bar/magnifying-glass.scss';

class App extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className='App'>
				<div className='options'>
					<button className='button-59 erase-btn'>ERASE</button>
					<button className='button-59 demo-btn'>DEMO</button>

					<span class='material-symbols-outlined' id='magnifying-glass'>
						zoom_in
					</span>
					<button className='button-59'>100%</button>
					<button className='button-59'>75%</button>
					<button className='button-59'>50%</button>
				</div>
				<div className='cv'>
					<Experience defaultData={obiWanInfo} />
					<PersonalInfo defaultData={obiWanInfo} />
					<Photo />
				</div>
			</div>
		);
	}
}

export default App;
