import React, { Component } from 'react';
import SlickSlider from './imageslider/SlickSlider'
import CompetitionHome from '../competition/CompetitionHome';
import About from './About';
import ContactUs from './ContactUs';
import LatestNews from './LatestNews';
import OfficersHome from '../officers/OfficerHome';
import HomepageContentHolder from './HomepageContentHolder';
import Footer from './Footer';


function Home() {


	return (
		<div>
			<SlickSlider id="img-carousel"/>
			<HomepageContentHolder component={<About />} header='About Us'/>
			<HomepageContentHolder component={<LatestNews />} header='Latest News and Events'/>
			<HomepageContentHolder component={<CompetitionHome />} header='Competitions'/>
			<HomepageContentHolder component={<OfficersHome />} header='Officers'/>
			<HomepageContentHolder component={<ContactUs />} header='Contact Us'/>
			<Footer/>
		</div>
	);

}



export default Home;
