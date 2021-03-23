import React, { Component } from 'react';
import Widecard from '../components/Widecard';

class Education extends Component {
	render() {
		return (
			<div className="condiv">
				<h1 className="subtopic">Education</h1>
				<Widecard
					title="Visual Communications"
					where="Westwood College"
					from="2006"
					to="2010"
				/>
				<Widecard
					title="High School"
					where="Steinmetz Academic Center"
					from="1996"
					to="2001"
				/>
			</div>
		);
	}
}

export default Education;
