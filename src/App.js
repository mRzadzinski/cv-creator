import React, { Component } from 'react';
import obiWanInfo from './user-data/obi-wan-data';
import dataBoilerplate from './user-data/data-boilerplate';
import Experience from './components/Experience';
import PersonalInfo from './components/PersonalInfo';
import Options from './Options';
import Photo from './components/Photo';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import './styles/App.scss';


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
		this.cvRef = React.createRef();
		this.OptionsRef = React.createRef();

		this.eraseData = this.eraseData.bind(this);
		this.renderDemo = this.renderDemo.bind(this);
		this.updateData = this.updateData.bind(this);
		this.addData = this.addData.bind(this);
		this.deleteData = this.deleteData.bind(this);
		this.renderPDF = this.renderPDF.bind(this);
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
		const prevElement = stateCopy.userData[propName][arrLength - 2];
		if (!prevElement) {
			stateCopy.userData[propName][arrLength - 1].id = 1;
		} else {
			stateCopy.userData[propName][arrLength - 1].id = prevElement.id + 1;
		}

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

	renderPDF() {
		// Set default app scale to improve PDF quality
		this.OptionsRef.current.scaleApp(1);

		html2canvas(this.AppRef.current.children[1]).then((canvas) => {
			let canvasHeight = this.cvRef.current.offsetHeight;
			let canvasWidth = this.cvRef.current.offsetWidth;

			let imgData = canvas.toDataURL('image/jpeg', 1);
			let pdf = new jsPDF('p', 'pt', [canvasWidth, canvasHeight]);

			pdf.addImage(imgData, 'JPG', 0, 0, canvasWidth, canvasHeight);
			pdf.save('my-cv.pdf');
		});
	}

	render() {
		const { userData } = this.state;

		return (
			<div className='App wrap' ref={this.AppRef}>
				<Options
					eraseData={this.eraseData}
					renderDemo={this.renderDemo}
					renderPDF={this.renderPDF}
					AppRef={this.AppRef}
					ref={this.OptionsRef}
				/>
				<div className='cv' ref={this.cvRef}>
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
