import React, {useState} from 'react';
import FixtureImport from "../../data/league_data/tdbaDivTwoFixtures.json"
import LeagueImport from "../../data/league_data/tdbaDivisionTwo.json"
import LeagueAndFixturePage from './LeagueAndFixturePage'

function TdbaDivTwoFixtures() {
	const [fixtureData] = useState(FixtureImport)
	const [leagueData] = useState(LeagueImport)

	return( 
		<LeagueAndFixturePage leagueData={leagueData} fixtureData={fixtureData}/>
	 )
}

export default TdbaDivTwoFixtures;