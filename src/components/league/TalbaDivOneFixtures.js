import React, {useState} from 'react';
import FixtureImport from "../../data/league_data/talbaDivOneFixtures.json"
import LeagueImport from "../../data/league_data/talbaDivisionOne.json"
import LeagueAndFixturePage from './LeagueAndFixturePage'

function TalbaDivOneFixtures (){
	const [fixtureData, setFixtureData] = useState(FixtureImport)
	const [leagueData, setLeagueData] = useState(LeagueImport)

	return( 
		<LeagueAndFixturePage leagueData={leagueData} fixtureData={fixtureData}/>	
	 )
}

export default TalbaDivOneFixtures;