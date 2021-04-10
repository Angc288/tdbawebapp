import React, { useState } from 'react';
import LeagueTable from './LeagueTable'
import FixtureBlock from './FixtureBlock'


function LeagueAndFixturePage({ divisionId, leagueNameProp }) {

	const [fixtureData, setFixtureData] = useState()
	const [leagueData, setLeagueData] = useState()
	const [leagueName] = useState(leagueNameProp)
	const [leagueLoading, setLeagueLoading] = useState(false)
	const [fixtureLoading, setFixtureLoading] = useState(false)



	React.useEffect(() => {

		if (!leagueData && !leagueLoading) {
			setLeagueLoading(true)
			fetch('https://tjrlh6izkj.execute-api.eu-west-2.amazonaws.com/production/leaguetables/' + divisionId)
				.then(results => results.json())
				.then(data => {
					setLeagueLoading(false);
					setLeagueData(data);
				});
		}

		if (!fixtureData && !fixtureLoading) {
			setFixtureLoading(true)
			fetch('https://tjrlh6izkj.execute-api.eu-west-2.amazonaws.com/production/leaguefixtures?divisionid=' + divisionId)
				.then(results => results.json())
				.then(data => {
					setFixtureLoading(false)
					setFixtureData(data);
				});
		}



	}, [leagueData, fixtureData]);

	return (
		<div>
			<h2>{leagueName}</h2>
			{leagueData && fixtureData ?
				<div>
					<LeagueTable data={leagueData} />
					<FixtureBlock rounds={fixtureData} />
				</div>
				:
				<div> Loading</div>
			}
		</div>
	)

}

export default LeagueAndFixturePage;