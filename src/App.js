import React, { Component } from 'react';
import Experience from './components/Experience';
import PersonalInfo from './components/PersonalInfo';
import Photo from './components/Photo';
import './styles/App.scss';
import './styles/Photo.scss'
import './styles/PersonalInfo.scss'
import './styles/Experience.scss'

class App extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
      <div className='App'>
        <Experience />
		<PersonalInfo />
		<Photo />
      </div>
    );
	}
}

export default App;
