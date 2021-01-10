import React, {useState} from 'react';
import FixtureImport from "../../data/league_data/tdbaDivOneFixtures.json"
import LeagueImport from "../../data/league_data/tdbaDivisionOne.json"
import LeagueAndFixturePage from './LeagueAndFixturePage'

function TdbaDivOneFixtures (){
  	const [fixtureData, setFixtureData] = useState(FixtureImport)
	const [leagueData, setLeagueData] = useState(LeagueImport)

	return( 
		<LeagueAndFixturePage leagueData={leagueData} fixtureData={fixtureData}/>
	 )
}

export default TdbaDivOneFixtures;