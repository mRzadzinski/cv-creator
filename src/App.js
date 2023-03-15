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
			userInfo: Object.assign({}, obiWanInfo),
		};

		this.eraseData = this.eraseData.bind(this);
		this.renderDemo = this.renderDemo.bind(this);
	}

	renderDemo() {
		this.setState({
			userInfo: Object.assign({}, obiWanInfo),
		});
	}

	eraseData() {
		this.setState({
			userInfo: Object.assign({}, dataBoilerplate),
		});
	}

	render() {
		const { userInfo } = this.state;

		return (
			<div className='App'>
				<Options eraseData={this.eraseData} renderDemo={this.renderDemo} />
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
