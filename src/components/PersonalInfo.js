import React, { Children, Component } from 'react';
import Name from './PersonalInfo/Name';
import JobTitle from './PersonalInfo/JobTitle';
import About from './PersonalInfo/About';
import ContactInfo from './PersonalInfo/ContactInfo';
import EditBtn from './edit-data/EditBtn';
import SaveBtn from './edit-data/SaveBtn';

export default class PersonalInfo extends Component {
	constructor(props) {
		super(props);

		this.state = {
			editMode: false,
		};

		this.toggleEditMode = this.toggleEditMode.bind(this);
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
			cornerButton = <EditBtn toggleEditMode={this.toggleEditMode} />;
		}

		return (
			<div className='PersonalInfo'>
				<div className='name-title-about'>
					<Name userData={userData} editMode={editMode} updateData={updateData} />
					<JobTitle userData={userData} editMode={editMode} updateData={updateData} />
					<About userData={userData} editMode={editMode} updateData={updateData} />
				</div>
				<ContactInfo userData={userData} editMode={editMode} updateData={updateData} />

				{cornerButton}
			</div>
		);
	}
}
