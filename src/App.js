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
import './styles/PersonalInfo/JobTitle.scss';
import './styles/PersonalInfo/About.scss';
import './styles/PersonalInfo/ContactInfo.scss';
import './styles/Experience/Job.scss';
import './styles/options-bar/buttons.scss';
import './styles/options-bar/icons.scss';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			userData: Object.assign({}, obiWanInfo),
			photo: 'demo',
		};

		// Store Photo's component function
		this.clearPhoto = null;

		this.eraseData = this.eraseData.bind(this);
		this.renderDemo = this.renderDemo.bind(this);
		this.assignClearPhoto = this.assignClearPhoto.bind(this);
	}

	renderDemo() {
		this.setState({
			userData: Object.assign({}, obiWanInfo),
			photo: 'demo',
		});
	}

	eraseData() {
		this.setState({
			userData: Object.assign({}, dataBoilerplate),
			photo: null,
		});

		if (this.clearPhoto) {
			this.clearPhoto();
		}
	}

	// Store Photo's component function through props
	assignClearPhoto(clearPhotoFn) {
		this.clearPhoto = clearPhotoFn;
	}

	render() {
		const { userData, photo } = this.state;

		return (
			<div className='App'>
				<Options eraseData={this.eraseData} renderDemo={this.renderDemo} />
				<div className='cv'>
					<Experience userData={userData} />
					<PersonalInfo userData={userData} />
					<Photo photoDemo={photo} assignClearPhoto={this.assignClearPhoto} />
				</div>
			</div>
		);
	}
}

export default App;
