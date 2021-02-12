import React from 'react';
import TopNavBar from "./TopNavBar"


function TopNav({ fixtureGroups }) {
	return (
		<header>
			<TopNavBar fixtureGroups={fixtureGroups} />
		</header>
	);

}


export default TopNav;


