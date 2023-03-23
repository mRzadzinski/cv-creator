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
import './styles/Experience/addBtn.scss';
import './styles/options-bar/buttons.scss';
import './styles/options-bar/icons.scss';
import './styles/edit-data/EditBtns.scss';
import '/Users/Coding/repos/cv-creator/src/styles/edit-data/DeleteBtn.scss';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			// Deep clone object with JSON methods
			userData: JSON.parse(JSON.stringify(obiWanInfo)),
		};

		this.AppRef = React.createRef();
		this.PhotoRef = React.createRef();
		this.PersonalInfoRef = React.createRef();
		this.ExpRef = React.createRef();

		this.eraseData = this.eraseData.bind(this);
		this.renderDemo = this.renderDemo.bind(this);
		this.updateData = this.updateData.bind(this);
		this.addData = this.addData.bind(this);
		this.deleteData = this.deleteData.bind(this);
	}

	renderDemo() {
		this.setState({
			userData: JSON.parse(JSON.stringify(obiWanInfo)),
		});

		if (this.PersonalInfoRef.current.state.editMode) {
			this.PersonalInfoRef.current.toggleEditMode();
		}

		this.PhotoRef.current.displayDemo();
	}

	eraseData() {
		console.log(dataBoilerplate)
		this.setState({
			userData: JSON.parse(JSON.stringify(dataBoilerplate)),
		});

		if (this.PersonalInfoRef.current.state.editMode) {
			this.PersonalInfoRef.current.toggleEditMode();
		}
		if (this.ExpRef.current.state.editMode) {
			this.ExpRef.current.toggleEditMode();
		}

		this.PhotoRef.current.removeUserPhoto();
	}

	updateData(propName, newValue, propToUpdate, id) {
		const stateCopy = JSON.parse(JSON.stringify(this.state));

		// Deal with prop arrays containing objects
		if (Array.isArray(this.state.userData[propName])) {
			stateCopy.userData[propName].forEach((obj) => {
				if (obj.id === id) {
					obj[propToUpdate] = newValue;
				}
			});
		} else {
			stateCopy.userData[propName] = newValue;
		}
		this.setState({
			...stateCopy,
		});
	}

	addData(propName) {
		const stateCopy = JSON.parse(JSON.stringify(this.state));

		if (propName === 'jobs' || propName === 'education') {
			stateCopy.userData[propName].push(
				JSON.parse(JSON.stringify(stateCopy.userData.jobBoilerplate))
			);
		} else if (propName === 'skills') {
			stateCopy.userData[propName].push(
				JSON.parse(JSON.stringify(stateCopy.userData.skillBoilerplate))
			);
		}

		// Set id for new element
		const arrLength = stateCopy.userData[propName].length;
		const prevID = stateCopy.userData[propName][arrLength - 2].id;
		stateCopy.userData[propName][arrLength - 1].id = prevID + 1;

		this.setState({
			...stateCopy,
		});
	}

	deleteData(propName, id) {
		const stateCopy = JSON.parse(JSON.stringify(this.state));

		stateCopy.userData[propName] = stateCopy.userData[propName].filter(
			(el) => el.id !== id
		);

		this.setState({
			...stateCopy,
		});
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
						deleteData={this.deleteData}
						userData={userData}
						updateData={this.updateData}
						addData={this.addData}
						ref={this.ExpRef}
					/>
				</div>
			</div>
		);
	}
}

export default App;
