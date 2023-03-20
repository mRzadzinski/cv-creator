import React, { Component } from "react";

export default class ContactInfo extends Component {
    constructor(props) {
        super(props);

		this.emailInputRef = React.createRef()   
		this.phoneInputRef = React.createRef()   
		this.streetInputRef = React.createRef()   
		this.cityInputRef = React.createRef()   
		this.countryInputRef = React.createRef()   
    }

    render() {
        const { userData, editMode, updateData } = this.props;

        let email;
		if (userData.email !== '') {
			email = <div className="email contact-data">{userData.email}</div>
		} else {
			email = <div className="email contact-data">Email</div>
		}

        let phone;
		if (userData.phone !== '') {
			phone = <div className="phone contact-data">tel. {userData.phone}</div>
		} else {
			phone = <div className="phone contact-data">Phone Number</div>
		}

        let street;
		if (userData.street !== '') {
			street = <div className="street contact-data">{userData.street}</div>
		} else {
			street = <div className="street contact-data">Street</div>
		}

        let city;
		if (userData.city !== '') {
			city = <div className="city contact-data">{userData.city}</div>
		} else {
			city = <div className="city contact-data">City</div>
		}

        let country;
		if (userData.country !== '') {
			country = <div className="country contact-data">{userData.country}</div>
		} else {
			country = <div className="country contact-data">Country</div>
		}

        return(
            <div className="ContactInfo">
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