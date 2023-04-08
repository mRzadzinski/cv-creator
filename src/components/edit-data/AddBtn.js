import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import '../../styles/Experience/addBtn.scss';

const AddBtn = (props) => {
	const { id, addData, addDataParam } = props;

	return (
		<div className='addBtn' onClick={() => addData(addDataParam)} id={id}>
			<FontAwesomeIcon icon={faPlus} className='add-icon' />
		</div>
	);
};

export default AddBtn;
