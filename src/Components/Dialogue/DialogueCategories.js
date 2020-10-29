import React from 'react';
import { Link } from 'react-router-dom';


const DialogueCategories = () => {
	return (
		<div>
			<h2 className="dialogue-title">Dialogue Topics</h2>
			<div className='dialogue-container'>
				<di className="dialogue">
					<Link to='/dialogue/funny'>
						<h3>Funny</h3>
					</Link>
				</di>
				<div>
					<Link to='/dialogue/kids'>
						<h3>Kids</h3>
					</Link>
				</div>
				<div>
					<Link to='/dialogue/deepconversations'>
						<h3>Deep Conversations</h3>
					</Link>
				</div>
				<div>
					<Link to='/dialogue/firstdate'>
						<h3>First Date</h3>
					</Link>
				</div>
				<div>
					<Link to='/dialogue/family'>
						<h3>Family</h3>
					</Link>
				</div>
				<div>
					<Link to='/dialogue/networking'>
						<h3>Networking</h3>
					</Link>
				</div>
				<div>
					<Link to='/dialogue/friends'>
						<h3>Friends</h3>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default DialogueCategories;
