import React, {useState} from 'react';
import FixtureImport from "../../data/league_data/talbaDivTwoFixtures.json"
import LeagueImport from "../../data/league_data/talbaDivisionTwo.json"
import LeagueAndFixturePage from './LeagueAndFixturePage'

function TalbaDivTwoFixtures (){
	const [fixtureData, setFixtureData] = useState(FixtureImport)
	const [leagueData, setLeagueData] = useState(LeagueImport)

	return( 
		<LeagueAndFixturePage leagueData={leagueData} fixtureData={fixtureData}/>
	 )
}

export default TalbaDivTwoFixtures;