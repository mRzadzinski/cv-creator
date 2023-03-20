import React, { Component } from 'react';

export default class About extends Component {
	constructor(props) {
		super(props);

		this.aboutInputRef = React.createRef();

		this.defaultAbout =
			'Some information about you. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque laoreet turpis in molestie fringilla. Phasellus at lorem eget sem egestas ullamcorper.';
	}

	render() {
		const { userData, editMode, updateData } = this.props;

		let aboutDefaultValue;
		if (userData.name !== '') {
			aboutDefaultValue = userData.about;
		} else {
			aboutDefaultValue = '';
		}

		let about;
		if (editMode) {
			about = 
				<textarea
					className='about-input'
					rows={8}
					placeholder='About'
					ref={this.aboutInputRef}
					defaultValue={aboutDefaultValue}
					onChange={() => updateData('about', this.aboutInputRef.current.value)}
				/>
		} else {
			if (userData.name !== '') {
				about = <div className='about-info'>{userData.about}</div>;
			} else {
				about = <div className='about-info'>{this.defaultAbout}</div>;
			}
		}

		return (
			<div className='About'>
				<div className='about'>ABOUT</div>
				{about}
			</div>
		);
	}
}
