import React from 'react';
import './testimonials.scss';

const Testimonials = () => {
	return (
		<div className='testimonial-container'>
			<div className='testimonial-text'>
				<h1>Testimonials</h1>
				<div>
					<h3>THE MOST AMAZING APP EVER!</h3>
					<p>
						That is saying a lot considering I created Facebook. I love this
						app, it lets me outsource the heavy lifting for all the
						dinner parties I'm having. If only this app could tell me how to
						dress for a dinner party since all I own are hoodies...
					</p>
					<h4>-Mark Z.</h4>
				</div>

				<div>
					<h3>This app is a lifesaver.</h3>
					<p>
						I was completely lost planning dinner parties now that I don't have
						the White House staff taking care of that for me. With PPP, I can
						entertain important people and send them home impressed and
						satisfied!
					</p>
					<h4>-Barack O.</h4>
				</div>
				<div>
					<h3>Maybe I'm Biased, but ...</h3>
					<p>
						My daughter is amazing and so is her app. I don't know what more I
						need to say.
					</p>
					<iframe
						src='https://giphy.com/embed/8OGSUyxhyBzvwozf3l'
						width='240'
						height='135'
						frameBorder='0'
						class='giphy-embed'
						tite='krisjennergif'
						allowFullScreen></iframe>

					<h4>-Mom</h4>
				</div>
			</div>
		</div>
	);
};

export default Testimonials;
