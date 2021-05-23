import React, { useState } from 'react';
import Select from 'react-select'

const AdminFixture = ({ callback, fixtureId, teamNames }) => {

    const [homeTeam, setHomeTeam] = useState("")
    const [awayTeam, setAwayTeam] = useState("")
    const [fixtureData, setFixtureData] = useState(
        {
            id: fixtureId,
            team1: "",
            team2: ""
        }
    )

    const newOptions = teamNames.map(function (val, index) {
        return { value: val.name, label: val.name, id: val.id }
    })

    const homeTeamChanged = (teamParam) => {
        setHomeTeam(teamParam.value)
        setFixtureData({ ...fixtureData, team1: teamParam.value })
        var newFixtureData = { ...fixtureData, team1: teamParam.value }
        callback(newFixtureData)
    }

    const awayTeamChanged = (teamParam) => {
        setAwayTeam(teamParam.value)
        setFixtureData({ ...fixtureData, team2: teamParam.value })
        var newFixtureData = { ...fixtureData, team2: teamParam.value }
        callback(newFixtureData)
    }


    return (
    <div>
        <label style={{
            width: 300
        }}>
            Home Team:
                {/* <input type="text" value={homeTeam} onChange={e => homeTeamChanged(e.target.value)} /> */}
            <Select options={newOptions} onChange={e => homeTeamChanged(e)} />
        </label>
        <span> v </span>
        <label style={{
            width: 300
        }}>
            Away Team:
                {/* <input type="text" value={awayTeam} onChange={e => awayTeamChanged(e.target.value)} /> */}
            <Select options={newOptions} onChange={e => awayTeamChanged(e)} />
        </label>
    </div>
    );

}

export default AdminFixture;