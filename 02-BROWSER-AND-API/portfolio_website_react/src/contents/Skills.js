import React, { Component } from 'react';

class Skills extends Component {
	constructor(props) {
		super(props);
		this.state = {
			mySkills: ['HTML', 'CSS', 'JavaScript', 'React', 'Adobe Suite'],
		};
	}
	render() {
		return (
			<div className="condiv">
				<h1 className="subtopic">Skills</h1>
				<ul>
					{this.state.mySkills.map((value) => {
						return <li>{value}</li>;
					})}
				</ul>
			</div>
		);
	}
}

export default Skills;
