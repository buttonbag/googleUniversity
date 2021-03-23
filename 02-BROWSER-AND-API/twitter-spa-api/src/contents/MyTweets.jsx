import React, { Component } from 'react';
import TweetApi from '../components/TweetApi';

class MyTweets extends Component {
	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-md">
						<h1>MyTweets</h1>
						<TweetApi />
					</div>
				</div>
			</div>
		);
	}
}

export default MyTweets;
