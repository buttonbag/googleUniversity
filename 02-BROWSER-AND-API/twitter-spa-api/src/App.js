import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './contents/Home';
import MyTweets from './contents/MyTweets';
import Search from './contents/Search';

function App() {
	return (
		<Router>
			<div className="App container">
				<Navbar />
				<Route exact path="/">
					<Home />
				</Route>
				<Route exact path="/MyTweets">
					<MyTweets />
				</Route>
				<Route exact path="/Search">
					<Search />
				</Route>
			</div>
		</Router>
	);
}

export default App;
