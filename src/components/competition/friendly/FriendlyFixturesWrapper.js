import React, { useState } from 'react';
import FriendlyFixturesTable from './FriendlyFixturesTable'
import outdoorFixtures from "../../../data/outdoorFixtures.json"
import ladiesFixtures from "../../../data/ladiesFixtures.json"
import indoorFixtures from "../../../data/indoorFixtures.json"
import { useHistory } from "react-router-dom";


function FriendlyFixturesWrapper({ fixtureGroupIdProps, fixtureGroupNameProps }) {

    const [fixtureData, setFixtureData] = useState([])
    const [fixtureGroupName] = useState(fixtureGroupNameProps)
    const [fixtureGroupId] = useState(fixtureGroupIdProps)
    const [fixtureLoaded, setFixtureLoaded] = useState(false)

	let history = useHistory();

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
            <button onClick={() => history.goBack()}>Back</button>
            <h2>{fixtureGroupName}</h2>
            <FriendlyFixturesTable data={fixtureData} />
        </div>
    )

}

export default FriendlyFixturesWrapper;