import React, { Component } from 'react';

class Social extends Component {
	render() {
		return (
			<div className="social">
				<a href="/">
					<i className="fab fa-codepen" alt="co"></i>
				</a>
				<a href="/">
					<i className="fab fa-instagram" alt="in"></i>
				</a>
				<a href="/">
					<i className="fab fa-twitter" alt="tw"></i>
				</a>
				<a href="/">
					<i className="fab fa-linkedin" alt="li"></i>
				</a>
			</div>
		);
	}
}

export default Social;
