import React, { Component } from 'react';
import DeleteBtn from '../edit-data/DeleteBtn';

export default class Skill extends Component {
	constructor(props) {
		super(props);

		this.skillInput = React.createRef();
	}

	render() {
		const { userData, editMode, updateData, deleteData, id } = this.props;

		let skillDefaultInput;
		let skillDefault;
		if (userData !== '') {
			skillDefaultInput = userData;
			skillDefault = userData;
		} else {
			skillDefaultInput = '';
			skillDefault = 'Your amazing skill';
		}

		let skill;
		let deleteBtn;
		if (editMode) {
			skill = (
				<input
					className='skills-input'
					type='text'
					placeholder='Skill'
					ref={this.skillInput}
					defaultValue={skillDefaultInput}
					onChange={() =>
						updateData('skills', this.skillInput.current.value, 'skill', id)
					}
				/>
			);
			deleteBtn = (
				<DeleteBtn
					dataPropName='skills'
					deleteData={deleteData}
					id={id}
					styleName='delete-skill-btn'
				/>
			);
		} else {
			skill = <span>{skillDefault}</span>;
			deleteBtn = null;
		}

		return (
			<div className='skill'>
				{skill}
				{deleteBtn}
			</div>
		);
	}
}
