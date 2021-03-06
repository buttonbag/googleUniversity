import React, { Component } from 'react';
import NavItem from './NavItem';

class Navbar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			NavItemActive: '',
		};
	}
	activeItem = (x) => {
		if (this.state.NavItemActive.length > 0) {
			document
				.getElementById(this.state.NavItemActive)
				.classList.remove('active');
		}
		this.setState({ NavItemActive: x }, () => {
			document.getElementById(this.state.NavItemActive).classList.add('active');
		});
	};

	render() {
		return (
			<nav>
				<ul className="col-md">
					<NavItem item="Home" toLink="/" activec={this.activeItem} />
					<NavItem
						item="MyTweets"
						toLink="/MyTweets"
						activec={this.activeItem}
					/>
					<NavItem item="Search" toLink="/Search" activec={this.activeItem} />
				</ul>
			</nav>
		);
	}
}

export default Navbar;
