import React from 'react';
import TopNavBar from "./TopNavBar"


function TopNav({ place }) {
	return (
		<header>
			<TopNavBar place={place} />
		</header>
	);

}


export default TopNav;


