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
						<h3>Funny</h3>
						<img src={Funny} alt='funny' />
					</Link>
				</div>
				<div>
					<Link to='/dialogue/deep'>
						<h3>Deep</h3>
						<img src={Deep} alt='deep' />
					</Link>
				</div>
				<div>
					<Link to='/dialogue/date'>
						<h3>Date</h3>
						<img src={Date} alt='date' />
					</Link>
				</div>
				<div>
					<Link to='/dialogue/family'>
						<h3>Family</h3>
						<img src={Family} alt='family' />
					</Link>
				</div>
				<div>
					<Link to='/dialogue/networking'>
						<h3>Networking</h3>
						<img src={Networking} alt='networking' />
					</Link>
				</div>
				<div>
					<Link to='/dialogue/friends'>
						<h3>Friends</h3>
						<img src={Friends} alt='friends' />
					</Link>
				</div>
			</div>
		</div>
	);
};

export default DialogueCategories;
