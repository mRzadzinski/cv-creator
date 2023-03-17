import React, { Component } from 'react';
import obiWanAvatar from '../img/avatar-sw.png';
import uploadImg from '../img/upload-img.svg';

export default class Photo extends Component {
	constructor(props) {
		super(props);

		this.state = {
			userPhoto: obiWanAvatar,
		};

		this.userPhotoStorage = null;
		this.inputRef = React.createRef();
		this.avatarRef = React.createRef();
		this.uploaderRef = React.createRef();

		this.readFile = this.readFile.bind(this);
		this.removeUserPhoto = this.removeUserPhoto.bind(this);
		this.displayUploader = this.displayUploader.bind(this);
		this.hideUploader = this.hideUploader.bind(this);
	}

	displayUploader() {
		this.avatarRef.current.classList.add('hidden');
		this.uploaderRef.current.classList.remove('hidden');
	}

	hideUploader() {
		if (this.state.userPhoto) {
			this.avatarRef.current.classList.remove('hidden');
			this.uploaderRef.current.classList.add('hidden');
		}
	}

	displayDemo() {
		this.setState(
			{
				userPhoto: obiWanAvatar,
			},
			() => this.hideUploader()
		);
	}

	removeUserPhoto() {
		this.displayUploader();
		this.setState({
			userPhoto: null,
		});
	}

	readFile(uploadedPhoto) {
		const reader = new FileReader();

		reader.readAsDataURL(uploadedPhoto);
		reader.onload = () => {
			this.setState(
				{
					userPhoto: reader.result,
				},
				() => this.hideUploader()
			);
		};
		// Reset input to work on upload of the same photo
		this.inputRef.current.value = null;
	}

	render() {
		const { userPhoto } = this.state;

		const avatar = (
			<img id='avatar' src={userPhoto} alt='Avatar' ref={this.avatarRef} />
		);

		const uploader = (
			<div className='upload-photo hidden' ref={this.uploaderRef}>
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
		return (
			<div
				className='Photo'
				onMouseEnter={() => this.displayUploader()}
				onMouseLeave={() => this.hideUploader()}
			>
				{avatar}
				{uploader}
			</div>
		);
	}
}
