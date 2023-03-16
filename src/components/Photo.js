import React, { Component } from 'react';
import obiWanAvatar from '../img/avatar-sw.png';
import uploadImg from '../img/upload-img.svg';

export default class Photo extends Component {
	constructor(props) {
		super(props);

		this.state = {
			userPhoto: null,
		};
	}

	render() {
		const { userPhoto } = this.state;
		const { photoDemo } = this.props;

		let avatar;
		if (photoDemo) {
			avatar = <img id='avatar' src={obiWanAvatar} alt='Avatar' />;
		} else {
			if (!userPhoto) {
				avatar = (
					<div className='upload-photo'>
						<label className='custom-file-upload'>
							<img src={uploadImg} alt='upload-img' id='upload-img' />
							<input type='file' />
							<div className='upload-instruction'>PHOTO</div>
						</label>
					</div>
				);
			} else {
				avatar = <img id='avatar' src={userPhoto} alt='Avatar' />;
			}
		}

		return <div className='Photo'>{avatar}</div>;
	}
}
