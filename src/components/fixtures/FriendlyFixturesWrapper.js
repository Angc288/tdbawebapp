import React, { useState } from 'react';
import FriendlyFixturesTable from './FriendlyFixturesTable'
import outdoorFixtures from "../../data/outdoorFixtures.json"
import ladiesFixtures from "../../data/ladiesFixtures.json"
import indoorFixtures from "../../data/indoorFixtures.json"


function FriendlyFixturesWrapper({ fixtureGroupIdProps, fixtureGroupNameProps }) {

    const [fixtureData, setFixtureData] = useState([])
    const [fixtureGroupName] = useState(fixtureGroupNameProps)
    const [fixtureGroupId] = useState(fixtureGroupIdProps)
    const [fixtureLoaded, setFixtureLoaded] = useState(false)

    // React.useEffect(() => {

    // 	if (!leagueData && !leagueLoading) {
    // 		setLeagueLoading(true)
    // 		fetch('https://korkszmntc.execute-api.eu-west-2.amazonaws.com/PRD/leaguetables/' + divisionId)
    // 			.then(results => results.json())
    // 			.then(data => {
    // 				setLeagueLoading(false);
    // 				setLeagueData(data);
    // 			});
    // 	}

    // 	if (!fixtureData && !fixtureLoading) {
    // 		setFixtureLoading(true)
    // 		fetch('https://korkszmntc.execute-api.eu-west-2.amazonaws.com/PRD/division/' + divisionId + '/fixtures')
    // 			.then(results => results.json())
    // 			.then(data => {
    // 				setFixtureLoading(false)
    // 				setFixtureData(data);
    // 			});
    // 	}



    // }, [leagueData, fixtureData]);


    React.useEffect(() => {
        if (!fixtureLoaded) {
            if (fixtureGroupId === 'Indoor_Fixtures_2019_2020') {
                setFixtureData(indoorFixtures)
            } else if (fixtureGroupId === 'Outdoor_Fixtures_2020') {
                setFixtureData(outdoorFixtures)
            } else if (fixtureGroupId ==='TALBA_Outdoor_Fixtures_2019') {
                setFixtureData(ladiesFixtures)
            }
            setFixtureLoaded(true)
        }
    }, [fixtureData])

    return (
        <div>
            <h2>{fixtureGroupName}</h2>
            <FriendlyFixturesTable data={fixtureData} />
            {/* {leagueData && fixtureData ?
				<div>
					<LeagueTable data={leagueData} />
					<FixtureBlock rounds={fixtureData} />
				</div>
				:
				<div> Loading</div>
			} */}
        </div>
    )

}

export default FriendlyFixturesWrapper;