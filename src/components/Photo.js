import React, { Component } from 'react';
import obiWanAvatar from '../img/avatar-sw.png';
import uploadImg from '../img/upload-img.svg';

export default class Photo extends Component {
	constructor(props) {
		super(props);

		this.state = {
			userPhoto: null,
		};

		this.inputRef = React.createRef();

		this.readFile = this.readFile.bind(this);
		this.removeUserPhoto = this.removeUserPhoto.bind(this);
	}

	removeUserPhoto() {
		this.setState({
			userPhoto: null,
		});
	}

	displayDemoPhoto() {
		if (this.props.photoDemo) {
			this.setState({
				userPhoto: null,
			});
		}
	}

	readFile(uploadedPhoto) {
		const reader = new FileReader();

		reader.readAsDataURL(uploadedPhoto);
		reader.onload = () =>
			this.setState({
				userPhoto: reader.result,
			});
	}

	render() {
		const { userPhoto } = this.state;
		const { photoDemo, assignClearPhoto } = this.props;

		assignClearPhoto(this.removeUserPhoto);

		let avatar;
		if (userPhoto) {
			avatar = <img id='avatar' src={userPhoto} alt='Avatar' />;
		} else if (photoDemo) {
			avatar = <img id='avatar' src={obiWanAvatar} alt='Avatar' />;
		} else {
			if (!userPhoto) {
				avatar = (
					<div className='upload-photo'>
						<label className='custom-file-upload'>
							<img src={uploadImg} alt='upload-img' id='upload-img' />
							<input
								onChange={() => this.readFile(this.inputRef.current.files[0])}
								type='file'
								ref={this.inputRef}
							/>
							<div className='upload-instruction'>PHOTO</div>
						</label>
					</div>
				);
			}
		}

		return <div className='Photo'>{avatar}</div>;
	}
}
