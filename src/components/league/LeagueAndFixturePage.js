import React, { useState } from 'react';
import LeagueTable from './LeagueTable'
import FixtureBlock from './FixtureBlock'
import {useLocation} from "react-router-dom";
import SeasonFixturesComponent from '../displayFixtures/SeasonFixturesComponent';
import { useHistory } from "react-router-dom";

const LeagueAndFixturePage = () => {

	const [fixtureData, setFixtureData] = useState()
	const [leagueData, setLeagueData] = useState()
	const [leagueName, setLeagueName] = useState()
	const [leagueLoading, setLeagueLoading] = useState(false)
	const [fixtureLoading, setFixtureLoading] = useState(false)
	
	const location = useLocation()

	React.useEffect(() => {
		const params = new URLSearchParams(location.search)

		setLeagueName(params.get("divisionId"))

		if (!leagueData && !leagueLoading) {
			setLeagueLoading(true)
			fetch('https://tjrlh6izkj.execute-api.eu-west-2.amazonaws.com/production/leaguetables/' + params.get("divisionId"))
				.then(results => results.json())
				.then(data => {
					setLeagueLoading(false);
					setLeagueData(data);
				});
		}

		if (!fixtureData && !fixtureLoading) {
			setFixtureLoading(true)
			fetch('https://tjrlh6izkj.execute-api.eu-west-2.amazonaws.com/production/leaguefixtures?divisionid=' + params.get("divisionId"))
				.then(results => results.json())
				.then(data => {
					setFixtureLoading(false)
					setFixtureData(data);
				});
		}
	}, [leagueData, fixtureData]);

	let history = useHistory();

	return (
		<div>
			<div> <button onClick={() => history.goBack()}>Back</button>   <h2>{leagueName}</h2></div>
			
			{leagueData && fixtureData ?
				<div>
					<LeagueTable data={leagueData} />
					{/* <FixtureBlock rounds={fixtureData} /> */}
					<SeasonFixturesComponent seasonsFixturesParam={fixtureData} editable={false}/>
				</div>
				:
				<div> Loading</div>
			}
		</div>
	)

}

export default LeagueAndFixturePage;