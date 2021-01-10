import React from 'react';
import LeagueFixture from './LeagueFixture'
import ReactLeagueTable from './LeagueTable'

function LeagueAndFixturePage({leagueData, fixtureData})  {  

	return( 
		<div>
			<h2>{leagueData['name']}</h2>
		   <ReactLeagueTable data={leagueData['entries']}/>
		   <LeagueFixture someData={fixtureData}/>
	   </div>	
	 )

}

export default LeagueAndFixturePage;