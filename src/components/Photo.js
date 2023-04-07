import React, {
	useState,
	useRef,
	forwardRef,
	useImperativeHandle,
	useEffect,
} from 'react';
import obiWanAvatar from '../img/avatar-sw.png';
import uploadImg from '../img/upload-img.svg';
import '../styles/Photo.scss';

const Photo = forwardRef((props, ref) => {
	const [userPhoto, setUserPhoto] = useState(obiWanAvatar);

	const inputRef = useRef(null);
	const avatarRef = useRef(null);
	const uploaderRef = useRef(null);

	useImperativeHandle(ref, () => {
		return {
			displayDemo() {
				setUserPhoto(obiWanAvatar);
			},

			removeUserPhoto() {
				displayUploader();
				setUserPhoto(null);
			},
		};
	});

	useEffect(() => {
		hideUploader();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [userPhoto]);

	function displayUploader() {
		avatarRef.current.classList.add('hidden');
		uploaderRef.current.classList.remove('hidden');
	}

	function hideUploader() {
		if (userPhoto) {
			avatarRef.current.classList.remove('hidden');
			uploaderRef.current.classList.add('hidden');
		}
	}

	function readFile(uploadedPhoto) {
		const reader = new FileReader();

		reader.readAsDataURL(uploadedPhoto);
		reader.onload = () => {
			setUserPhoto(reader.result);
		};
		// Reset input to work on upload of the same photo
		inputRef.current.value = null;
	}

	return (
		<div
			className='Photo'
			onMouseEnter={() => displayUploader()}
			onMouseLeave={() => hideUploader()}
		>
			<img id='avatar' src={userPhoto} alt='Avatar' ref={avatarRef} />

			<div className='upload-photo hidden' ref={uploaderRef}>
				<label className='custom-file-upload'>
					<img src={uploadImg} alt='upload-img' id='upload-img' />
					<input
						onChange={() => readFile(inputRef.current.files[0])}
						type='file'
						ref={inputRef}
					/>
					<div className='upload-instruction'>PHOTO</div>
				</label>
			</div>
		</div>
	);
});

export default Photo;
