import React from 'react';

const List = (props) => {
	const { repos } = props;
	if (!repos || repos.length === 0) return <p>No repos.</p>;
	return (
		<ul>
			<h2 className="list-head">Available Public Repos</h2>
			{repos.map((repo) => {
				return (
					<li className="list" key={repo.id}>
						<span className="repo-text">
							{repo.name}
							<br />
						</span>
						<span className="repo-description">{repo.description}</span>
					</li>
				);
			})}
		</ul>
	);
};

export default List;
