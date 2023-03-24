import React, { Component } from 'react';
import Name from './PersonalInfo/Name';
import JobTitle from './PersonalInfo/JobTitle';
import About from './PersonalInfo/About';
import ContactInfo from './PersonalInfo/ContactInfo';
import EditBtn from './edit-data/EditBtn';
import SaveBtn from './edit-data/SaveBtn';
import '../styles/PersonalInfo.scss';

export default class PersonalInfo extends Component {
	constructor(props) {
		super(props);

		this.state = {
			editMode: false,
		};

		this.editBtnRef = React.createRef();

		this.showEditBtn = this.showEditBtn.bind(this);
		this.hideEditBtn = this.hideEditBtn.bind(this);
		this.toggleEditMode = this.toggleEditMode.bind(this);
	}

	showEditBtn() {
		if (!this.state.editMode) {
			this.editBtnRef.current.editBtnRef.current.style.visibility = 'visible';
		}
	}

	hideEditBtn() {
		if (!this.state.editMode) {
			this.editBtnRef.current.editBtnRef.current.style.visibility = 'hidden';
		}
	}

	toggleEditMode() {
		if (this.state.editMode) {
			this.setState({
				editMode: false,
			});
		} else {
			this.setState({
				editMode: true,
			});
		}
	}

	render() {
		const { userData, updateData } = this.props;
		const { editMode } = this.state;

		let cornerButton;
		if (editMode) {
			cornerButton = <SaveBtn toggleEditMode={this.toggleEditMode} />;
		} else {
			cornerButton = (
				<EditBtn toggleEditMode={this.toggleEditMode} ref={this.editBtnRef} />
			);
		}

		return (
			<div
				className='PersonalInfo'
				onMouseEnter={() => this.showEditBtn()}
				onMouseLeave={() => this.hideEditBtn()}
			>
				<div className='name-title-about'>
					<Name
						userData={userData}
						editMode={editMode}
						updateData={updateData}
					/>
					<JobTitle
						userData={userData}
						editMode={editMode}
						updateData={updateData}
					/>
					<About
						userData={userData}
						editMode={editMode}
						updateData={updateData}
					/>
				</div>
				<ContactInfo
					userData={userData}
					editMode={editMode}
					updateData={updateData}
				/>

				{cornerButton}
			</div>
		);
	}
}
