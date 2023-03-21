import React, { Component } from 'react';

export default class Skill extends Component {
	constructor(props) {
		super(props);

		this.skillInput = React.createRef();
	}

	render() {
		const { userData, editMode, updateData, expType, expIndex } = this.props;

		let skillDefault;
		if (userData !== '') {
			skillDefault = userData;
		} else {
			skillDefault = '';
		}

		let skill;
		if (editMode) {
			skill = (
				<input
					className='skills-input'
					type='text'
					placeholder='Skill'
					ref={this.skillInput}
					defaultValue={skillDefault}
					onChange={() =>
						updateData('skills', this.skillInput.current.value, null, expIndex)
					}
				/>
			);
		} else {
			skill = <span>{userData}</span>;
		}

		return <div>{skill}</div>;
	}
}
