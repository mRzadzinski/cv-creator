import React, { Component } from 'react';

export default class Skill extends Component {
	constructor(props) {
		super(props);

		this.skillInput = React.createRef();
	}

	render() {
		const { userData, editMode, updateData, expIndex } = this.props;

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
		if (editMode) {
			skill = (
				<input
					className='skills-input'
					type='text'
					placeholder='Skill'
					ref={this.skillInput}
					defaultValue={skillDefaultInput}
					onChange={() =>
						updateData('skills', this.skillInput.current.value, null, expIndex)
					}
				/>
			);
		} else {
			skill = <span>{skillDefault}</span>;
		}

		return <div>{skill}</div>;
	}
}
