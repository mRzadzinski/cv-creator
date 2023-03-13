import React, { Component } from "react";

export default class Position extends Component {
    render() {
        return(
            <div className="Position">{this.props.defaultPosition}</div>
        );
    }
}