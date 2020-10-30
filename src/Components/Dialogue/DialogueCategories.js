import React from 'react';
import { Link } from 'react-router-dom';

import Funny from '../../imgs/funny.jpg'
import Deep from '../../imgs/deepconversation.jpg';
import Date from '../../imgs/firstdate.jpg';
import Family from '../../imgs/family.jpg';
import Networking from '../../imgs/networking.jpg';
import Friends from '../../imgs/friends.jpg'


const DialogueCategories = () => {
	return (
		<div>
			<h2 className='dialogue-title'>Dialogue Topics</h2>
			<div className='dialogue-container'>
				<div className='dialogue'>
					<Link to='/dialogue/funny'>
						<img src={Funny} alt='funny' />
						<h3>Funny</h3>
					</Link>
				</div>
				<div>
					<Link to='/dialogue/deep'>
						<img src={Deep} alt='deep' />
						<h3>Deep</h3>
					</Link>
				</div>
				<div>
					<Link to='/dialogue/date'>
						<img src={Date} alt='date' />
						<h3>Date</h3>
					</Link>
				</div>
				<div>
					<Link to='/dialogue/family'>
						<img src={Family} alt='family' />
						<h3>Family</h3>
					</Link>
				</div>
				<div>
					<Link to='/dialogue/networking'>
						<img src={Networking} alt='networking' />
						<h3>Networking</h3>
					</Link>
				</div>
				<div>
					<Link to='/dialogue/friends'>
						<img src={Friends} alt='friends' />
						<h3>Friends</h3>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default DialogueCategories;
