import React, { Component } from 'react';

export default class About extends Component {
    constructor(props) {
        super(props);

        this.defaultAbout =
        'Some information about you. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque laoreet turpis in molestie fringilla. Phasellus at lorem eget sem egestas ullamcorper.';

    }

	render() {
		const { userData } = this.props;

		let about;
		if (userData.name !== '') {
			about = <div className='about-info'>{userData.about}</div>;
		} else {
			about = <div className='about-info'>{this.defaultAbout}</div>;
		}

		return (
			<div className='About'>
				<div className='about'>ABOUT</div>
				{about}
			</div>
		);
	}
}
