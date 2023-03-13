import React, { Component } from "react";

export default class Name extends Component {
    render() {
        return(
            <div className="Name">
                <div className="name">{this.props.defaultName.name}</div>
                <div className="surname">{this.props.defaultName.surname}</div>
            </div>
        );
    }
}