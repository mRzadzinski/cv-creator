import React from 'react';
import '../../styles/edit-data/EditBtns.scss';

const SaveBtn = (props) => {
	const { toggleEditMode } = props;

	return (
		<div className='SaveBtn' onClick={() => toggleEditMode()}>
			<span className='material-symbols-outlined' id='save-sign' title='Save'>
				done
			</span>
		</div>
	);
};

export default SaveBtn;
