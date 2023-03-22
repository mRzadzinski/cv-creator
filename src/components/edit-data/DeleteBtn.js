import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export default class DeleteBtn extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { deleteData,dataPropName, index, id } = this.props;

		return (
			<div className={`delete-btn ${id}`}  onClick={() => deleteData(dataPropName, index)}>
				<span className='material-symbols-outlined delete-icon' >delete</span>
			</div>
		);
	}
}
