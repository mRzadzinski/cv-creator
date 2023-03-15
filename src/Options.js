import React, { Component } from 'react';

export default class Options extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className='Options'>
				<button className='button-59 erase-btn'>ERASE</button>
				<button className='button-59 demo-btn'>DEMO</button>

				<span class='material-symbols-outlined' id='magnifying-glass'>
					zoom_in
				</span>
				<button className='button-59'>100%</button>
				<button className='button-59'>75%</button>
				<button className='button-59'>50%</button>
			</div>
		);
	}
}
