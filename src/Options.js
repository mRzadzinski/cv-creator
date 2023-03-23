import React, { Component } from 'react';

export default class Options extends Component {
	constructor(props) {
		super(props);

		this.scaleApp = this.scaleApp.bind(this);
	}

	scaleApp(percentage) {
		this.props.AppRef.current.style.transform = `scale(${percentage})`;
	}

	render() {
		const { eraseData, renderDemo, renderPDF } = this.props;

		return (
			<div className='Options'>
				<button onClick={() => eraseData()} className='button erase-btn'>
					ERASE
				</button>
				<button onClick={() => renderDemo()} className='button demo-btn'>
					DEMO
				</button>

				<span className='material-symbols-outlined' id='magnifying-glass'>
					zoom_in
				</span>
				<button onClick={() => this.scaleApp(1)} className='button'>100%</button>
				<button onClick={() => this.scaleApp(.7)} className='button'>70%</button>
				<button onClick={() => this.scaleApp(.55)} className='button' id='fifty-button'>
					50%
				</button>

				<span className='material-symbols-outlined' id='download-icon'>
					download
				</span>
				<button className='button pdf-btn' onClick={() => renderPDF()}>PDF</button>
			</div>
		);
	}
}
