import React, { useState } from 'react';
import FriendlyFixturesTable from './FriendlyFixturesTable'
import outdoorFixtures from "../../../data/outdoorFixtures.json"
import ladiesFixtures from "../../../data/ladiesFixtures.json"
import indoorFixtures from "../../../data/indoorFixtures.json"
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Container } from 'react-bootstrap';


function FriendlyFixturesWrapper() {

    const [fixtureData, setFixtureData] = useState([])
    const [fixtureGroupName, setFixtureGroupName] = useState()
    const [fixtureGroupId, setFixtureGroupId] = useState()
    const [fixtureLoaded, setFixtureLoaded] = useState(false)

    const location = useLocation()
    let history = useHistory();

    React.useEffect(() => {

        const params = new URLSearchParams(location.search)
        setFixtureGroupId(params.get("fixtureGroupId"))
        setFixtureGroupName(params.get("fixtureGroupName"))

        if (!fixtureLoaded) {
            if (fixtureGroupId === 'Indoor_Fixtures_2019_2020') {
                setFixtureData(indoorFixtures)
            } else if (fixtureGroupId === 'Outdoor_Fixtures_2020') {
                setFixtureData(outdoorFixtures)
            } else if (fixtureGroupId === 'TALBA_Outdoor_Fixtures_2019') {
                setFixtureData(ladiesFixtures)
            }
            setFixtureLoaded(true)
        }
    }, [fixtureData, fixtureGroupName, fixtureGroupId])

    return (
        <div style={{ paddingTop: 100 }}>
            <button onClick={() => history.goBack()}>Back</button>
            <h2>{fixtureGroupName}</h2>
            <Container>
                <FriendlyFixturesTable data={fixtureData} />
            </Container>
        </div>
    )

}

export default FriendlyFixturesWrapper;