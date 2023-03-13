import React, { Component } from 'react';
import obiWan from '../img/avatar-sw.png'

export default class Photo  extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
      <div className='Photo'>
        <img id='avatar' src={obiWan} alt="Avatar" />
      </div>
    );
	}
}