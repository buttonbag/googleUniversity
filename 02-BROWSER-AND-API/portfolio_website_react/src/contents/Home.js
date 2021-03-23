import React, { Component } from 'react';
// import profilePic from 'https://source.unsplash.com/tTdC88_6a_I/300x300'; //importing picture as 'profilePic'
import ReactTypingEffect from 'react-typing-effect';
import Social from '../components/Social';

class Home extends Component {
	render() {
		return (
			<div className="condiv home">
				<img
					src="https://source.unsplash.com/tTdC88_6a_I/300x300"
					className="profilePic"
					alt=""
				></img>

				<ReactTypingEffect
					className="typingEffect"
					text={['I am Buttonbag', 'I am a developer', 'I am a designer']}
					speed={100}
					eraseDelay={700}
				/>

				<Social />
			</div>
		);
	}
}

export default Home;
