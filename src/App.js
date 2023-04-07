import React, { useRef, useState } from 'react';
import obiWanInfo from './user-data/obi-wan-data';
import dataBoilerplate from './user-data/data-boilerplate';
import Experience from './components/Experience';
import PersonalInfo from './components/PersonalInfo';
import Options from './Options';
import Photo from './components/Photo';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import './styles/App.scss';

const App = () => {
	// Deep clone object with JSON methods
	const [userData, setUserData] = useState(
		JSON.parse(JSON.stringify(obiWanInfo))
	);

	const appRef = useRef(null);
	const photoRef = useRef(null);
	const personalInfoRef = useRef(null);
	const expRef = useRef(null);
	const cvRef = useRef(null);
	const optionsRef = useRef(null);

	function renderDemo() {
		setUserData(JSON.parse(JSON.stringify(obiWanInfo)));

		if (personalInfoRef.current.editMode) {
			personalInfoRef.current.toggleEditMode();
		}

		photoRef.current.displayDemo();
	}

	function eraseData() {
		setUserData(JSON.parse(JSON.stringify(dataBoilerplate)));

		if (personalInfoRef.current.editMode) {
			personalInfoRef.current.toggleEditMode();
		}
		if (expRef.current.editMode) {
			expRef.current.toggleEditMode();
		}

		photoRef.current.removeUserPhoto();
	}

	function updateData(propName, newValue, propToUpdate, id) {
		const userDataCopy = JSON.parse(JSON.stringify(userData));

		// Deal with prop arrays containing objects
		if (Array.isArray(userData[propName])) {
			userDataCopy[propName].forEach((obj) => {
				if (obj.id === id) {
					obj[propToUpdate] = newValue;
				}
			});
		} else {
			userDataCopy[propName] = newValue;
		}
		setUserData(userDataCopy);
	}

	function addData(propName) {
		const userDataCopy = JSON.parse(JSON.stringify(userData));

		if (propName === 'jobs' || propName === 'education') {
			userDataCopy[propName].push(
				JSON.parse(JSON.stringify(userDataCopy.jobBoilerplate))
			);
		} else if (propName === 'skills') {
			userDataCopy[propName].push(
				JSON.parse(JSON.stringify(userDataCopy.skillBoilerplate))
			);
		}

		// Set id for new element
		const arrLength = userDataCopy[propName].length;
		const prevElement = userDataCopy[propName][arrLength - 2];
		if (!prevElement) {
			userDataCopy[propName][arrLength - 1].id = 1;
		} else {
			userDataCopy[propName][arrLength - 1].id = prevElement.id + 1;
		}

		setUserData(userDataCopy);
	}

	function deleteData(propName, id) {
		const userDataCopy = JSON.parse(JSON.stringify(userData));

		userDataCopy[propName] = userDataCopy[propName].filter(
			(el) => el.id !== id
		);

		setUserData(userDataCopy);
	}
	console.log(optionsRef.current)
	function renderPDF() {
		// Set default app scale to improve PDF quality
		optionsRef.current.scaleApp(1);

		html2canvas(appRef.current.children[1]).then((canvas) => {
			let canvasHeight = cvRef.current.offsetHeight;
			let canvasWidth = cvRef.current.offsetWidth;

			let imgData = canvas.toDataURL('image/jpeg', 1);
			let pdf = new jsPDF('p', 'pt', [canvasWidth, canvasHeight]);

			pdf.addImage(imgData, 'JPG', 0, 0, canvasWidth, canvasHeight);
			pdf.save('my-cv.pdf');
		});
	}

	return (
		<div className='App wrap' ref={appRef}>
			<Options
				eraseData={eraseData}
				renderDemo={renderDemo}
				renderPDF={renderPDF}
				appRef={appRef}
				ref={optionsRef}
			/>
			<div className='cv' ref={cvRef}>
				<Photo ref={photoRef} />
				<PersonalInfo
					userData={userData}
					updateData={updateData}
					ref={personalInfoRef}
				/>
				<Experience
					deleteData={deleteData}
					userData={userData}
					updateData={updateData}
					addData={addData}
					ref={expRef}
				/>
			</div>
		</div>
	);
};

export default App;
