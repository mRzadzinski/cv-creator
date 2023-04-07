import React, { useRef } from 'react';
import '../../styles/PersonalInfo/ContactInfo.scss';

const ContactInfo = (props) => {
	const { userData, editMode, updateData } = props;

	const emailInputRef = useRef(null)
	const phoneInputRef = useRef(null)
	const streetInputRef = useRef(null)
	const cityInputRef = useRef(null)
	const countryInputRef = useRef(null)


		let emailDefaultValue;
		if (userData.email !== '') {
			emailDefaultValue = userData.email;
		} else {
			emailDefaultValue = '';
		}

		let phoneDefaultValue;
		if (userData.phone !== '') {
			phoneDefaultValue = userData.phone;
		} else {
			phoneDefaultValue = '';
		}

		let streetDefaultValue;
		if (userData.street !== '') {
			streetDefaultValue = userData.street;
		} else {
			streetDefaultValue = '';
		}

		let cityDefaultValue;
		if (userData.city !== '') {
			cityDefaultValue = userData.city;
		} else {
			cityDefaultValue = '';
		}

		let countryDefaultValue;
		if (userData.country !== '') {
			countryDefaultValue = userData.country;
		} else {
			countryDefaultValue = '';
		}

		let email;
		let phone;
		let street;
		let city;
		let country;
		if (editMode) {
			email = (
				<input
					className='contact-input'
					type='text'
					placeholder='Email'
					ref={emailInputRef}
					defaultValue={emailDefaultValue}
					onChange={() => updateData('email', emailInputRef.current.value)}
				/>
			);
			phone = (
				<input
					className='contact-input'
					type='text'
					placeholder='Phone'
					ref={phoneInputRef}
					defaultValue={phoneDefaultValue}
					onChange={() => updateData('phone', phoneInputRef.current.value)}
				/>
			);
			street = (
				<input
					className='contact-input'
					type='text'
					placeholder='Street'
					ref={streetInputRef}
					defaultValue={streetDefaultValue}
					onChange={() =>
						updateData('street', streetInputRef.current.value)
					}
				/>
			);
			city = (
				<input
					className='contact-input'
					type='text'
					placeholder='City'
					ref={cityInputRef}
					defaultValue={cityDefaultValue}
					onChange={() => updateData('city', cityInputRef.current.value)}
				/>
			);
			country = (
				<input
					className='contact-input'
					type='text'
					placeholder='Country'
					ref={countryInputRef}
					defaultValue={countryDefaultValue}
					onChange={() =>
						updateData('country', countryInputRef.current.value)
					}
				/>
			);
		} else {
			if (userData.email !== '') {
				email = <div className='email contact-data'>{userData.email}</div>;
			} else {
				email = <div className='email contact-data'>Email</div>;
			}

			if (userData.phone !== '') {
				phone = <div className='phone contact-data'>tel. {userData.phone}</div>;
			} else {
				phone = <div className='phone contact-data'>Phone Number</div>;
			}

			if (userData.street !== '') {
				street = <div className='street contact-data'>{userData.street}</div>;
			} else {
				street = <div className='street contact-data'>Street</div>;
			}

			if (userData.city !== '') {
				city = <div className='city contact-data'>{userData.city}</div>;
			} else {
				city = <div className='city contact-data'>City</div>;
			}

			if (userData.country !== '') {
				country = (
					<div className='country contact-data'>{userData.country}</div>
				);
			} else {
				country = <div className='country contact-data'>Country</div>;
			}
		}

		return (
			<div className='ContactInfo'>
				<div className='contact-info-header'>Contact Info</div>
				{email}
				{phone}
				{street}
				{city}
				{country}
			</div>
		);
}

export default ContactInfo