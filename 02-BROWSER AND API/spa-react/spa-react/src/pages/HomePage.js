import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
	return (
		<div className="container">
			<h1>Hey from HomePage</h1>
			<p>
				<Link to="/extraLink">extra link</Link>
				<Link to="/yourLink">your link</Link>
			</p>
		</div>
	);
}
