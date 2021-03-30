import React, { Component } from 'react';
import axios from 'axios';

//empty array
var userPosts = [];

// this is the ID for @buttonbag
const userId = 877011487;
const url = `https://cors-anywhere.herokuapp.com/https://api.twitter.com/2/users/${userId}/tweets?max_results=10&tweet.fields=created_at`;

const bearerToken = process.env.REACT_APP_BEARER_TOKEN;

var config = {
	method: 'get',
	url: `${url}`,
	headers: {
		Authorization: `Bearer ${bearerToken}`,
	},
};

axios(config)
	.then(function (response) {
		// console.log(JSON.stringify(response.data));
		// push to array
		var res = response.data;
		res.data.forEach((resp) => {
			console.table(resp.created_at);
			userPosts.push(resp);
		});
	})
	.catch(function (error) {
		console.log(error);
	});

// ~~~~ here's the hotshot ES6 shorthand way ~~~~
// axios
// 	.get(url, { headers: { authorization: `Bearer ${bearerToken}` } })
// 	.then((response) => {
// 		console.log(JSON.stringify(response.data));
// 	})
// 	.catch((error) => {
// 		console.log(error.message);
// 	});

class TweetApi extends Component {
	render() {
		if (!userPosts || userPosts.length === 0) return <p>No userPosts.</p>;
		return (
			<div className="container d-flex flex-wrap">
				{userPosts.map((post) => {
					return (
						<div
							className="post m-3 w-25 d-flex flex-column"
							key={post.created_at}
						>
							<span className="p-3">{post.created_at}</span>
							<p className="p-3">{post.text}</p>
						</div>
					);
				})}
			</div>
		); // post data on here
	}
}

export default TweetApi;
