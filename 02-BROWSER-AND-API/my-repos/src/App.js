import React, { useEffect, useState } from 'react';
import './App.css';
import List from './components/List';
import WithListLoading from './components/withListLoading';
import axios from 'axios';

function App() {
	const ListLoading = WithListLoading(List);
	const [appState, setAppState] = useState({
		loading: false,
		repos: null,
	});

	useEffect(() => {
		setAppState({ loading: true });
		const token = process.env.REACT_APP_USER_TOKEN;
		const apiUrl = `https://api.github.com/users/buttonbag/repos`;

		/* 		fetch(apiUrl)
		.then((res) => res.json())
		.then((repos) => {
			setAppState({ loading: false, repos: repos });
		});
	}, [setAppState]); */

		axios
			.get(apiUrl, {
				headers: {
					Authorization: `token ${token}`,
				},
			})
			.then((repos) => {
				const allRepos = repos.data;
				setAppState({ loading: false, repos: allRepos });
			});
	}, [setAppState]);

	return (
		<div className="App">
			<div className="container">
				<h1>My Repos</h1>
			</div>
			<div className="repo-container">
				<ListLoading isLoading={appState.loading} repos={appState.repos} />
			</div>
		</div>
	);
}

export default App;
