import React, {useState} from 'react';
import FixtureImport from "../../data/league_data/tdbaPremFixtures.json"
import LeagueImport from "../../data/league_data/tdbaPrem.json"
import LeagueAndFixturePage from './LeagueAndFixturePage'

function TdbaPremFixtures (){
	const [fixtureData, setFixtureData] = useState(FixtureImport)
	const [leagueData, setLeagueData] = useState(LeagueImport)

	return( 
		<LeagueAndFixturePage leagueData={leagueData} fixtureData={fixtureData}/>
	 )
}

export default TdbaPremFixtures;