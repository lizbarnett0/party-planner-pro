import React, { useEffect, useState } from 'react';
import '../Dialogue/dialogue.scss'

const Dialogue = ({ match }) => {
	const [dialogue, setDialogue] = useState();

	useEffect(() => {
		fetch('/conversation-topics.json')
			.then((res) => res.json())
			.then((res) => {
				setDialogue(res);
				
			})
			.catch((err) => {
				console.error(err);
			});
	}, [match.params.category]);

	if (!dialogue) {
		return null;
	}
	return (
		<div className='topics'>
			<h2>
				{match.params.category.charAt(0).toUpperCase() +
					match.params.category.slice(1)}{' '}
				Conversation Topics
			</h2>
			<div className='question'>
				{dialogue.map((topic) => {
					if (topic.category === match.params.category)
						return <p>{topic.question}</p>;
				})}
			</div>
		</div>
	);
};

export default Dialogue;
