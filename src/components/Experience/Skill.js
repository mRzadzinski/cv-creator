import React, { useRef } from 'react';
import DeleteBtn from '../edit-data/DeleteBtn';

const Skill = (props) => {
	const { userData, editMode, updateData, deleteData, id } = props;

	const skillInput = useRef(null);

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
				ref={skillInput}
				defaultValue={skillDefaultInput}
				onChange={() =>
					updateData('skills', skillInput.current.value, 'skill', id)
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
};

export default Skill;
