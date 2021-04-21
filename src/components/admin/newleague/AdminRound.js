import React, { useState } from 'react';
import { Link } from "react-router-dom";
import AdminFixture from './AdminFixture';

const AdminRound = ({callback, roundId}) => {

    const [numberOfFixtures, setNumberOfFixtures] = useState(1)
    const [fixtureDate, setFixtureDate] = useState("")
    const newFixtureAddedToUi = () => {
        setNumberOfFixtures(numberOfFixtures + 1)
    }
    const [roundData, setRoundData] = useState(
        {
            id: roundId,
            roundDate: undefined,
            fixtures: [{
                id: 0,
                team1: "",
                team2: ""
            }]
        }
    )

    const fixtureDateChanged = (dateParam) => {
        setFixtureDate(dateParam)
        setRoundData({ ...roundData, roundDate: dateParam })
    }

    const addFixture = (fixture) => {
        roundData.fixtures.push(fixture)
    }

    const fixturesChanged = (change) => {

        var result = roundData.fixtures.find(obj => {
            return obj.id === change.id
        })

        var findIndex = roundData.fixtures.findIndex(obj => {
            return obj.id === change.id
        })

        if (result) {
            roundData.fixtures[findIndex] = change
        } else {
            addFixture(change)
        }

        callback(roundData)

    }

    return (<div>
        <input type="button" onClick={e => newFixtureAddedToUi()} value="add fixture" />
        <label>
            Date:
                <input type="text" value={fixtureDate} onChange={e => fixtureDateChanged(e.target.value)} />
        </label>
        <div>
            {[...Array(numberOfFixtures)].map((e, i) => <AdminFixture callback={fixturesChanged} fixtureId={i} />)
            }
        </div>
    </div>
    );

}
export default AdminRound;