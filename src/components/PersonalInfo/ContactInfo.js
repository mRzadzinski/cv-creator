import React, { Component } from 'react';

export default class ContactInfo extends Component {
	constructor(props) {
		super(props);

		this.emailInputRef = React.createRef();
		this.phoneInputRef = React.createRef();
		this.streetInputRef = React.createRef();
		this.cityInputRef = React.createRef();
		this.countryInputRef = React.createRef();
	}

	render() {
		const { userData, editMode, updateData } = this.props;

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
					ref={this.emailInputRef}
					defaultValue={emailDefaultValue}
					onChange={() => updateData('email', this.emailInputRef.current.value)}
				/>
			);
			phone = (
				<input
					className='contact-input'
					type='text'
					placeholder='Phone'
					ref={this.phoneInputRef}
					defaultValue={phoneDefaultValue}
					onChange={() => updateData('phone', this.phoneInputRef.current.value)}
				/>
			);
			street = (
				<input
					className='contact-input'
					type='text'
					placeholder='Street'
					ref={this.streetInputRef}
					defaultValue={streetDefaultValue}
					onChange={() =>
						updateData('street', this.streetInputRef.current.value)
					}
				/>
			);
			city = (
				<input
					className='contact-input'
					type='text'
					placeholder='City'
					ref={this.cityInputRef}
					defaultValue={cityDefaultValue}
					onChange={() => updateData('city', this.cityInputRef.current.value)}
				/>
			);
			country = (
				<input
					className='contact-input'
					type='text'
					placeholder='Country'
					ref={this.countryInputRef}
					defaultValue={countryDefaultValue}
					onChange={() =>
						updateData('country', this.countryInputRef.current.value)
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
}
