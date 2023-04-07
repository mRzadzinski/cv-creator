import React, {
	useState,
	useRef,
	forwardRef,
	useImperativeHandle,
} from 'react';
import Job from './Experience/Job';
import Skill from './Experience/Skill';
import EditBtn from './edit-data/EditBtn';
import SaveBtn from './edit-data/SaveBtn';
import AddBtn from './edit-data/AddBtn';
import '../styles/Experience.scss';
import '../styles/Experience/Job.scss';
import '../styles/Experience/Skills.scss';

const Experience = forwardRef((props, ref) => {
	const { userData, updateData, addData, deleteData } = props;
	const [editMode, setEditMode] = useState(false);

	const editBtnRef = useRef(null);
	const hobbiesInput = useRef(null);

	useImperativeHandle(ref, () => {
		return {
			editMode,
			toggleEditMode() {
				if (editMode) {
					setEditMode(false);
				} else {
					setEditMode(true);
				}
			},
		};
	});

	function showEditBtn() {
		if (!editMode) {
			editBtnRef.current.editBtnRef.current.style.visibility = 'visible';
		}
	}

	function hideEditBtn() {
		if (!editMode) {
			editBtnRef.current.editBtnRef.current.style.visibility = 'hidden';
		}
	}

	function toggleEditMode() {
		if (editMode) {
			setEditMode(false);
		} else {
			setEditMode(true);
		}
	}

	let editButton;
	let addJobBtn;
	let addEduBtn;
	let addSkillBtn;
	if (editMode) {
		editButton = <SaveBtn toggleEditMode={toggleEditMode} />;
		addJobBtn = <AddBtn addData={addData} addDataParam='jobs' />;
		addEduBtn = <AddBtn addData={addData} addDataParam='education' />;
		addSkillBtn = (
			<AddBtn id='add-skill' addData={addData} addDataParam='skills' />
		);
	} else {
		editButton = <EditBtn toggleEditMode={toggleEditMode} ref={editBtnRef} />;
		addJobBtn = null;
		addEduBtn = null;
		addSkillBtn = null;
	}

	let hobbiesDefaultInput;
	let hobbiesDefault;
	if (userData.hobbies !== '') {
		hobbiesDefaultInput = userData.hobbies;
		hobbiesDefault = userData.hobbies;
	} else {
		hobbiesDefaultInput = '';
		hobbiesDefault = 'Some interesting things you do besides work.';
	}

	let hobbies;
	if (editMode) {
		hobbies = (
			<textarea
				id='hobbies-input'
				rows={3}
				placeholder='Hobbies'
				ref={hobbiesInput}
				defaultValue={hobbiesDefaultInput}
				onChange={() => updateData('hobbies', hobbiesInput.current.value)}
			/>
		);
	} else {
		hobbies = <div className='hobbies'>{hobbiesDefault}</div>;
	}

	return (
		<div
			className='Experience'
			onMouseEnter={() => showEditBtn()}
			onMouseLeave={() => hideEditBtn()}
		>
			<div className='header'>Experience</div>

			<div className='exp-content jobs-div'>
				{userData.jobs.map((job) => (
					<Job
						editMode={editMode}
						updateData={updateData}
						deleteData={deleteData}
						propName='jobs'
						userData={job}
						id={job.id}
						key={job.id}
					/>
				))}
			</div>
			{addJobBtn}

			<div className='header'>Education</div>
			<div className='exp-content education-div'>
				{userData.education.map((edu) => (
					<Job
						editMode={editMode}
						updateData={updateData}
						deleteData={deleteData}
						propName='education'
						userData={edu}
						id={edu.id}
						key={edu.id}
					/>
				))}
			</div>
			{addEduBtn}

			<div className='header'>Skills</div>
			<div className='exp-content skills-div'>
				<ul className='skills'>
					{userData.skills.map((skillObj) => (
						<li className='skill' key={skillObj.id}>
							<Skill
								editMode={editMode}
								updateData={updateData}
								deleteData={deleteData}
								userData={skillObj.skill}
								id={skillObj.id}
								key={skillObj.id}
							/>
						</li>
					))}
				</ul>
			</div>
			{addSkillBtn}

			<div className='header'>Hobbies</div>
			<div className='exp-content'>{hobbies}</div>

			{editButton}
		</div>
	);
});

export default Experience;
