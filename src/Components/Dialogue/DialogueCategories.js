import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


const DialogueCategories = () => {
	return (
		<div className='home'>
			<div>
				<Card>
					<Card.Img variant='top' />
					<Card.Body>
						<Card.Title>Funny</Card.Title>
						<Card.Text>BLAH BLAH.</Card.Text>
						<Link to='/dialogue/funny'>
							<Button variant='primary'>Funny</Button>
						</Link>
					</Card.Body>
				</Card>
			</div>
			<div>
				<Card>
					<Card.Img variant='top' />
					<Card.Body>
						<Card.Title>Kids</Card.Title>
						<Card.Text>BLAH BLAH.</Card.Text>
						<Link to='/dialogue/kids'>
							<Button variant='primary'>Kids</Button>
						</Link>
					</Card.Body>
				</Card>
			</div>
			<div>
				<Card>
					<Card.Img variant='top' />
					<Card.Body>
						<Card.Title>Deep Conversations</Card.Title>
						<Card.Text>BLAH BLAH.</Card.Text>
						<Link to='/dialogue/deepconversations'>
							<Button variant='primary'>Deep Conversations</Button>
						</Link>
					</Card.Body>
				</Card>
			</div>
			<div>
				<Card>
					<Card.Img variant='top' />
					<Card.Body>
						<Card.Title>First Date</Card.Title>
						<Card.Text>BLAH BLAH.</Card.Text>
						<Link to='/dialogue/firstdate'>
							<Button variant='primary'>First Date</Button>
						</Link>
					</Card.Body>
				</Card>
			</div>
			<div>
				<Card>
					<Card.Img variant='top' />
					<Card.Body>
						<Card.Title>Family</Card.Title>
						<Card.Text>BLAH BLAH.</Card.Text>
						<Link to='/dialogue/family'>
							<Button variant='primary'>Family</Button>
						</Link>
					</Card.Body>
				</Card>
			</div>
			<div>
				<Card>
					<Card.Img variant='top' />
					<Card.Body>
						<Card.Title>Networking</Card.Title>
						<Card.Text>BLAH BLAH.</Card.Text>
						<Link to='/dialogue/networking'>
							<Button variant='primary'>Networking</Button>
						</Link>
					</Card.Body>
				</Card>
			</div>
			<div>
				<Card>
					<Card.Img variant='top' />
					<Card.Body>
						<Card.Title>Casual / With Friends</Card.Title>
						<Card.Text>BLAH BLAH.</Card.Text>
						<Link to='/dialogue/casualwithfriends'>
							<Button variant='primary'>Casual / With Friends</Button>
						</Link>
					</Card.Body>
				</Card>
			</div>
		</div>
	);
};

export default DialogueCategories;