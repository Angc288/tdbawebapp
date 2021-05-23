import React, { useState } from 'react';
import { Link } from "react-router-dom";
import qs from 'query-string';
import Select from 'react-select'
import friendlyFixtureGroups from "../../data/friendlyFixtures_groups.json"
import FriendlyFixturesWrapper from '../fixtures/FriendlyFixturesWrapper';
import { BrowserRouter as Router, Route } from 'react-router-dom'

function LeagueSelection() {

    const [selectedSeason, setSelectedSeason] = useState("Current")
    const [selectedOrganisation, setSelectedOrganisation] = useState("All")
    const [leagueLinks, setLeagueLinks] = useState([])
    const [borderWidth, setBorderWidth] = useState(1)

    const handleSeasonChange = (event) => {
        setSelectedSeason(event.value)
    }

    const handleOrganisationChange = (event) => {
        setSelectedOrganisation(event.value)
    }

    const readLeaguesFromSource = () => {

        var seasonParam = selectedSeason;

        if (selectedSeason === "Current") {
            seasonParam = 2020
        }

        fetch('https://tjrlh6izkj.execute-api.eu-west-2.amazonaws.com/production/divisions?season=' + seasonParam + '&organisation=TALBA')
            .then(results => {
                if (!results.ok) {
                    throw new Error('Something went wrong')
                }
                return results.json()
            })
            .then(data => {
                setBorderWidth(1)
                setLeagueLinks(data)
            })
            .catch(error => {
                setLeagueLinks([])
                setBorderWidth(0)
            });

    }


    React.useEffect(() => {
        readLeaguesFromSource()
    }, [selectedSeason, selectedOrganisation]);

    const yearSelectOptions = [
        { value: 'Current', label: 'Current' },
        { value: '2019', label: '2019' },
        { value: '2018', label: '2018' }
    ]

    const organisationSelectOptions = [
        { value: 'All', label: 'All' },
        { value: 'TDBA', label: 'T&DBA' },
        { value: 'TALBA', label: 'TALBA' }
    ]

    return (<div>
        <h1>Competitions</h1>
        <div style={{
            padding: 20
        }}>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center'
            }}>
                <div style={{ padding: 20, width: 175 }}>
                    <label>Season:</label>
                    <Select options={yearSelectOptions} onChange={handleSeasonChange} style={{ padding: 20, width: 175 }} />
                </div>
                <div style={{ padding: 20, width: 175 }}>
                    <label>Organisation:</label>
                    <Select options={organisationSelectOptions} onChange={handleOrganisationChange} name={selectedOrganisation} style={{ padding: 20, width: 175 }} />
                </div>

            </div>
            <div style={{
                borderWidth: borderWidth,
                borderColor: 'blue',
                borderStyle: 'solid',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
                padding: 20,
                marginBottom: 20
            }}>
                <h1>League</h1>
                {leagueLinks.map((link, index) => {
                    const newQueryParam = {
                        divisionId: link.DivisionId,
                        divisionName: link.divisionName,
                        divisionYear: link.divisionYear
                    }
                    return <Link to={`/leagueandfixtures?${qs.stringify(newQueryParam)}`}>{link.divisionName}</Link>
                })}
            </div>
            <div style={{
                borderWidth: borderWidth,
                borderColor: 'blue',
                borderStyle: 'solid',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
                padding: 20,
                marginBottom: 20
            }}>
                <h1>Friendly</h1>
                {friendlyFixtureGroups.map((fixtureGroup, index) => {
                    if (fixtureGroup.active) {
                        const path = "/friendlyfixtures/" + fixtureGroup.id
                        return <Link to={path}> {fixtureGroup.name}</Link>
                    }
                })}
            </div>
            <div style={{
                borderWidth: borderWidth,
                borderColor: 'blue',
                borderStyle: 'solid',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
                padding: 20,
                marginBottom: 20
            }}>
                <h1>Knockout</h1>
                {leagueLinks.map((link, index) => {
                    const newQueryParam = {
                        divisionId: link.DivisionId,
                        divisionName: link.divisionName,
                        divisionYear: link.divisionYear
                    }
                    return <Link to={`/leagueandfixtures?${qs.stringify(newQueryParam)}`}>{link.divisionName}</Link>
                })}
            </div>
        </div>
    </div>
    );

}

export default LeagueSelection;