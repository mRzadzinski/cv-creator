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
				<button className='button-59' id='fifty-button'>50%</button>

				<span className='material-symbols-outlined' id='download-icon'>download</span>
                <button className='button-59 pdf-btn'>PDF</button>
			</div>
		);
	}
}
