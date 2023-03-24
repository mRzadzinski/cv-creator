import React, { Component } from 'react';
import '../../styles/edit-data/DeleteBtn.scss';

export default class DeleteBtn extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { deleteData, dataPropName, id, styleName } = this.props;

		return (
			<div
				className={`delete-btn ${styleName}`}
				onClick={() => deleteData(dataPropName, id)}
			>
				<span className='material-symbols-outlined delete-icon'>delete</span>
			</div>
		);
	}
}
