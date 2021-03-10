import React, { Component } from 'react';

class Social extends Component {
	render() {
		return (
			<div className="social">
				<a href="/">
					<i className="fab fa-codepen">co</i>
				</a>
				<a href="/">
					<i className="fab fa-instagram">in</i>
				</a>
				<a href="/">
					<i className="fab fa-twitter">tw</i>
				</a>
				<a href="/">
					<i className="fab fa-linkedin">li</i>
				</a>
			</div>
		);
	}
}

export default Social;
