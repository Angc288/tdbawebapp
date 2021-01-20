import { green } from '@material-ui/core/colors';
import React from 'react';
import ReactLeagueTable from './LeagueTable'
import Match from './Match'


function LeagueAndFixturePage({leagueData, fixtureData})  {  

	console.log(leagueData);
	console.log(fixtureData);

	return( 
		<div>
			<h2>{leagueData['name']}</h2>
		    <ReactLeagueTable data={leagueData['entries']}/>
			<div>
		    	<Match fixtures={fixtureData}/>
			</div>
	   </div>	
	 )

}

export default LeagueAndFixturePage;