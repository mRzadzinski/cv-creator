import React, {
	useState,
	useRef,
	forwardRef,
	useImperativeHandle,
} from 'react';
import Name from './PersonalInfo/Name';
import JobTitle from './PersonalInfo/JobTitle';
import About from './PersonalInfo/About';
import ContactInfo from './PersonalInfo/ContactInfo';
import EditBtn from './edit-data/EditBtn';
import SaveBtn from './edit-data/SaveBtn';
import '../styles/PersonalInfo.scss';

const PersonalInfo = forwardRef((props, ref) => {
	const { userData, updateData } = props;

	const [editMode, setEditMode] = useState(false);
	const editBtnRef = useRef(null);

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

	let cornerButton;
	if (editMode) {
		cornerButton = <SaveBtn toggleEditMode={toggleEditMode} />;
	} else {
		cornerButton = <EditBtn toggleEditMode={toggleEditMode} ref={editBtnRef} />;
	}

	return (
		<div
			className='PersonalInfo'
			onMouseEnter={() => showEditBtn()}
			onMouseLeave={() => hideEditBtn()}
		>
			<div className='name-title-about'>
				<Name userData={userData} editMode={editMode} updateData={updateData} />
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
});

export default PersonalInfo;
