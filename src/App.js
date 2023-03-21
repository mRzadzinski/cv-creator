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
import './styles/Experience/Skills.scss';
import './styles/options-bar/buttons.scss';
import './styles/options-bar/icons.scss';
import './styles/edit-data/EditBtns.scss';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			userData: Object.assign({}, obiWanInfo),
		};

		this.AppRef = React.createRef();
		this.PhotoRef = React.createRef();
		this.PersonalInfoRef = React.createRef();
		this.ExpRef = React.createRef();

		this.eraseData = this.eraseData.bind(this);
		this.renderDemo = this.renderDemo.bind(this);
		this.updateData = this.updateData.bind(this);
	}

	renderDemo() {
		this.setState({
			userData: Object.assign({}, obiWanInfo),
		});

		if (this.PersonalInfoRef.current.state.editMode) {
			this.PersonalInfoRef.current.toggleEditMode();
		}

		this.PhotoRef.current.displayDemo();
	}

	eraseData() {
		this.setState({
			userData: Object.assign({}, dataBoilerplate),
		});

		if (this.PersonalInfoRef.current.state.editMode) {
			this.PersonalInfoRef.current.toggleEditMode();
		}
		if (this.ExpRef.current.state.editMode) {
			this.ExpRef.current.toggleEditMode();
		}

		this.PhotoRef.current.removeUserPhoto();
	}

	updateData(propName, value, arrayName, arrayIndex) {
		// Deal with nested arrays containing objects
		if (!this.state.userData[propName]) {
			const stateCopy = Object.assign({}, this.state);
			stateCopy.userData[arrayName][arrayIndex][propName] = value;
			this.setState({
				...stateCopy,
			});
			// Deal with prop arrays
		} else if (Array.isArray(this.state.userData[propName])) {
			const stateCopy = Object.assign({}, this.state);
			stateCopy.userData[propName][arrayIndex] = value;
			this.setState({
				...stateCopy,
			});
		} else {
			this.setState({
				...this.state,
				userData: {
					...this.state.userData,
					[propName]: value,
				},
			});
		}
	}

	render() {
		const { userData } = this.state;

		return (
			<div className='App wrap' ref={this.AppRef}>
				<Options
					eraseData={this.eraseData}
					renderDemo={this.renderDemo}
					AppRef={this.AppRef}
				/>
				<div className='cv'>
					<Photo ref={this.PhotoRef} />
					<PersonalInfo
						userData={userData}
						updateData={this.updateData}
						ref={this.PersonalInfoRef}
					/>
					<Experience
						userData={userData}
						updateData={this.updateData}
						ref={this.ExpRef}
					/>
				</div>
			</div>
		);
	}
}

export default App;
