import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Testimonials = () => {
	return (
		<div>
			<h1>Testimonials</h1>
			<Carousel>
				<Carousel.Item interval={5000}>
					<h1>THE MOST AMAZING APP EVER!</h1>
					<Carousel.Caption>
						<p>
							Nulla vitae elit libero, a pharetra augue mollis interdum.Nulla
							vitae elit libero, a pharetra augue mollis interdum.
						</p>
						<h3>Andrea G.</h3>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item interval={5000}>
					<h1>Make us some more apps please</h1>
					<Carousel.Caption>
						<p>
							Nulla vitae elit libero, a pharetra augue mollis interdum.Nulla
							vitae elit libero, a pharetra augue mollis interdum.
						</p>
						<h3>Craig R.</h3>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item interval={5000}>
					<h1>I would be lost without PPP</h1>
					<Carousel.Caption>
						<p>
							Nulla vitae elit libero, a pharetra augue mollis interdum.Nulla
							vitae elit libero, a pharetra augue mollis interdum.
						</p>
						<h3>Margot M.</h3>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</div>
	);
};

export default Testimonials;
