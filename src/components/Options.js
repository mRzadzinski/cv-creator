import React, { forwardRef, useImperativeHandle } from 'react';
import '../styles/Options.scss';
import '../styles/options-bar/buttons.scss';
import '../styles/options-bar/icons.scss';

const Options = forwardRef((props, ref) => {
	const { eraseData, renderDemo, renderPDF, appRef } = props;

	useImperativeHandle(ref, () => {
		return {
			scaleApp(percentage) {
				appRef.current.style.transform = `scale(${percentage})`;
			}
		}
	});

	function scaleApp(percentage) {
		appRef.current.style.transform = `scale(${percentage})`;
	}

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
			<button onClick={() => scaleApp(1)} className='button'>
				100%
			</button>

			<button onClick={() => scaleApp(0.7)} className='button'>
				70%
			</button>

			<button
				onClick={() => scaleApp(0.55)}
				className='button'
				id='fifty-button'
			>
				50%
			</button>

			<span className='material-symbols-outlined' id='download-icon'>
				download
			</span>
			<button className='button pdf-btn' onClick={() => renderPDF()}>
				PDF
			</button>
		</div>
	);
});

export default Options;
