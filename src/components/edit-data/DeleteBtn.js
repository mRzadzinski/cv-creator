import React from 'react';
import '../../styles/edit-data/DeleteBtn.scss';

const DeleteBtn = (props) => {
	const { deleteData, dataPropName, id, styleName } = props;

	return (
		<div
			className={`delete-btn ${styleName}`}
			onClick={() => deleteData(dataPropName, id)}
		>
			<span className='material-symbols-outlined delete-icon'>delete</span>
		</div>
	);
};

export default DeleteBtn;
