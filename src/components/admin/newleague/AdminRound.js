import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import AdminFixture from './AdminFixture';
import "react-datepicker/dist/react-datepicker.css";

const AdminRound = ({ callback, roundId, teamNames, numberOfFixturesPerRound }) => {

    const [fixtureDate, setFixtureDate] = useState(new Date())
    const newFixtureAddedToUi = () => {
       // setNumberOfFixtures(numberOfFixtures + 1)
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
    // const addFixture = (fixture) => {
    //     roundData.fixtures.push(fixture)
    // }

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
            roundData.fixtures.push(change)
        }

        callback(roundData)

    }

    const deleteRoundFromUi = (round) => {
    }

    return (
        <div style={{
            border: 'solid 1px blue',
            marginTop: 10,
            marginBottom: 10
        }}>
            {/* <input type="button" onClick={e => newFixtureAddedToUi()} value="add fixture" /> */}
            <label style={{
                marginTop: 20
            }}>
                Date:
                
            </label>
            <DatePicker selected={fixtureDate} onChange={date => fixtureDateChanged(date)} dateFormat='yyyy-MM-dd' />
            {/* <input type="button" onClick={e => deleteRoundFromUi()} value="delete round" /> */}
            <div>
                {[...Array(+numberOfFixturesPerRound)].map((e, i) => <AdminFixture callback={fixturesChanged} fixtureId={i} teamNames={teamNames} />)
                }
            </div>
        </div>
    );

}
export default AdminRound;