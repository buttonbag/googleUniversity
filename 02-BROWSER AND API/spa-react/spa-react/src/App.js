import React from 'react';

import { Route, Switch } from 'react-router-dom';

//we will create these two pages

import HomePage from './pages/HomePage';
import UserPage from './pages/UserPage';
import ExtraPage from './pages/ExtraPage';

export default function App() {
	return (
		// root route (/) to HomePage and matches other pages dynamically
		<Switch>
			<Route exact path="/" component={HomePage} />
			<Route path="/:id" component={UserPage} />
			<Route path="/:id" component={ExtraPage} />
		</Switch>
	);
}
