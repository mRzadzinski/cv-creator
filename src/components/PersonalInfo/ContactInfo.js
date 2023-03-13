import React, { Component } from "react";

export default class ContactInfo extends Component {
    render() {
        const contactInfo = this.props.defaultContactInfo;
        return(
            <div className="ContactInfo">
                <div className="email contact-data">{contactInfo.email}</div>
                <div className="phone contact-data">mobile: {contactInfo.phone}</div>
                <div className="street contact-data">{contactInfo.street}</div>
                <div className="city contact-data">{contactInfo.city}</div>
            </div>
        );
    }
}