import React, { forwardRef } from 'react';
import '../../styles/edit-data/EditBtns.scss';

const EditBtn = forwardRef((props, ref) => {
	const { toggleEditMode } = props;

	return (
		<div className='EditBtn' onClick={() => toggleEditMode()} ref={ref}>
			<span className='material-symbols-outlined' id='edit-sign' title='Edit'>
				edit
			</span>
		</div>
	);
});

export default EditBtn;
