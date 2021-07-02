import React, { useState } from 'react';
import LeagueTable from './LeagueTable'
import SeasonFixturesComponent from './fixtures/SeasonFixturesComponent'
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Container } from 'react-bootstrap';


const LeagueAndFixturePage = () => {

	const [fixtureData, setFixtureData] = useState()
	const [leagueData, setLeagueData] = useState()
	const [leagueName, setLeagueName] = useState()
	const [leagueLoading, setLeagueLoading] = useState(false)
	const [fixtureLoading, setFixtureLoading] = useState(false)

	const location = useLocation()

	React.useEffect(() => {
		const params = new URLSearchParams(location.search)

		setLeagueName(params.get("divisionName"))

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
		<>
			<div style={{ paddingTop: 100 }}>
				<button onClick={() => history.goBack()}>Back</button>
				<h2>{leagueName}</h2>
			</div>
			{leagueData && fixtureData ?
				<Container>
					<LeagueTable data={leagueData} />
					<SeasonFixturesComponent seasonsFixturesParam={fixtureData} editable={false} />
				</Container>
				:
				<div> Loading</div>
			}
		</>
	)

}

export default LeagueAndFixturePage;