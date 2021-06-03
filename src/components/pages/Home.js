import React, { Component } from 'react';
import SlickSlider from './imageslider/SlickSlider'
import ComponentOne from './test/ComponentOne';
import ComponentThree from './test/ComponentThree';
import ComponentFour from './test/ComponentFour';
import ComponentTwo from './test/ComponentTwo';


function Home() {

	const images = [
		{text:'See the latest news and events', image:'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&h=1000&q=80', link:''},
		{text:'Keep track of competitions and league tables', image:'https://images.unsplash.com/photo-1470341223622-1019832be824?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&h=1000&q=80',link:''},
		{text:'Check out the association officers', image:'https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&h=1000&q=80',link:''},
		{text:'Use the links to get more information', image:'https://images.unsplash.com/photo-1534161308652-fdfcf10f62c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&h=1000&q=80',link:''}
	]

	return (
		<div>
			<SlickSlider images={images} />
			<div>
				some stuff
			</div>
			<ComponentOne id="componentOne"/>
			<ComponentThree/>
			<ComponentFour/>
			<ComponentTwo/>
		</div>
	);

}



export default Home;
