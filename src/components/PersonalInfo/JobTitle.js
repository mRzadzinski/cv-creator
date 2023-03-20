import React, { Component } from "react";

export default class JobTitle extends Component {
    constructor(props) {
        super(props);

		this.jobTitleInputRef = React.createRef()
    }

    render() {
        const { userData, updateData } = this.props;

        let jobTitle;
		if (userData.jobTitle !== '') {
			jobTitle = <div className="JobTitle">{userData.jobTitle}</div>
		} else {
			jobTitle = <div className="JobTitle">Job Title</div>
		}

        return(
            <div className="JobTitle">{jobTitle}</div>
        );
    }
}