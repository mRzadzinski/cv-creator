import React, { Component } from "react";

export default class About extends Component {
    render() {
        return(
            <div className="About">
                <div className="about">ABOUT</div>
                <div className="about-info">{this.props.defaultAbout}</div>
            </div>
        );
    }
}