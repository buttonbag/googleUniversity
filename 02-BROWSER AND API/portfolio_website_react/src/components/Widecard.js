import React, { Component } from 'react';

class Widecard extends Component {
	render() {
		return (
			<div className="widecard">
				<div className="compdet">
					<h3>{this.props.title}</h3>
					<p className="secondText">{this.props.where}</p>
					<p className="secondText">
						{this.props.from}-{this.props.to}
					</p>
				</div>
			</div>
		);
	}
}

export default Widecard;
