import React, { useEffect, useState } from 'react';

const Dialogue = ({ match }) => {
	const [dialogue, setDialogue] = useState();

	useEffect(() => {
		fetch('/conversation-topics.json')
			.then((res) => res.json())
			.then((res) => {
				setDialogue(res);
				console.log(res);
				console.log(match.params.category);
			})
			.catch((err) => {
				console.error(err);
			});
	}, [match.params.category]);

	if (!dialogue) {
		return null;
	}
	return (
		<div>
			<h1>
				{match.params.category.charAt(0).toUpperCase() +
					match.params.category.slice(1)}
			</h1>
			{dialogue.map((topic) => {
				if (topic.category === match.params.category)
					return (
						<div>
							<ul>
								<li>{topic.question}</li>
							</ul>
						</div>
					);
			})}
		</div>
	);
};

export default Dialogue;
