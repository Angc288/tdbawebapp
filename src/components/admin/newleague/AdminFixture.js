import React, { useState } from 'react';
import { Link } from "react-router-dom";

const AdminFixture = ({ callback, fixtureId }) => {

    const [homeTeam, setHomeTeam] = useState("")
    const [awayTeam, setAwayTeam] = useState("")
    const [fixtureData, setFixtureData] = useState(
        {
            id: fixtureId,
            team1: "",
            team2: ""
        }
    )

    const homeTeamChanged = (teamParam) => {
        setHomeTeam(teamParam)
        setFixtureData({ ...fixtureData, team1: teamParam })
        var newFixtureData = { ...fixtureData, team1: teamParam }
        callback(newFixtureData)
    }

    const awayTeamChanged = (teamParam) => {
        setAwayTeam(teamParam)
        setFixtureData({ ...fixtureData, team2: teamParam })
        var newFixtureData = { ...fixtureData, team2: teamParam }
        callback(newFixtureData)
    }

    return (<div>
        <label>
            Home Team:
                <input type="text" value={homeTeam} onChange={e => homeTeamChanged(e.target.value)} />
        </label>
        <label>
            Away Team:
                <input type="text" value={awayTeam} onChange={e => awayTeamChanged(e.target.value)} />
        </label>
    </div>
    );

}

export default AdminFixture;