import React, { useState } from 'react';
import { Link } from "react-router-dom";
import qs from 'query-string';
import Select from 'react-select'
import friendlyFixtureGroups from "../../data/friendlyFixtures_groups.json"
import CompetitionDisplayPanel from './CompetitionDisplayPanel';

function CompetitionHome() {

    const [selectedSeason, setSelectedSeason] = useState("Current")
    const [selectedOrganisation, setSelectedOrganisation] = useState("All")
    const [leagueLinks, setLeagueLinks] = useState([])

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
                setLeagueLinks(data)
            })
            .catch(error => {
                setLeagueLinks([])
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

    return (<div id = "competitions">
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

            <CompetitionDisplayPanel competionTypeParam='League' linksParam={leagueLinks.map((link, index) => {
                const newQueryParam = {
                    divisionId: link.DivisionId,
                    divisionName: link.divisionName,
                    divisionYear: link.divisionYear
                }

                const linkObject = { url: "/leagueandfixtures?" + qs.stringify(newQueryParam), name: link.divisionName }

                return linkObject
            })}></CompetitionDisplayPanel>
            <CompetitionDisplayPanel competionTypeParam='Friendly' linksParam={friendlyFixtureGroups.map((fixtureGroup, index) => {
                if (fixtureGroup.active) {
                    return { url: "/friendlyfixtures/" + fixtureGroup.id, name: fixtureGroup.name }
                }
            })}></CompetitionDisplayPanel>
            <CompetitionDisplayPanel competionTypeParam='Knockout' linksParam={[]}/>
        </div>
    </div>
    );

}

export default CompetitionHome;