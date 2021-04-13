import React, { useState } from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import { Link } from "react-router-dom";

function LeagueSelection() {

    const [selectedSeason, setSelectedSeason] = useState("Current")
    const [selectedOrganisation, setSelectedOrganisation] = useState("All")
    const [leagueLinks, setLeagueLinks] = useState([])

    const handleSeasonChange = (e) => {
        setSelectedSeason(e)
    }

    const handleOrganisationChange = (e) => {
        setSelectedOrganisation(e)
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


    return (<div>
        <h1>League Bowls</h1>
        <div>
            <DropdownButton id="dropdown-basic-button" title={selectedSeason} onSelect={handleSeasonChange}>
                <Dropdown.Item eventKey="Current" active="true">Current</Dropdown.Item>
                <Dropdown.Item eventKey="2019">2019</Dropdown.Item>
                <Dropdown.Item eventKey="2018">2018</Dropdown.Item>
            </DropdownButton>
            <DropdownButton id="dropdown-basic-button" title={selectedOrganisation} onSelect={handleOrganisationChange}>
                <Dropdown.Item eventKey="All" active="true">All</Dropdown.Item>
                <Dropdown.Item eventKey="TDBA">T&DBA</Dropdown.Item>
                <Dropdown.Item eventKey="TALBA">TALBA</Dropdown.Item>
            </DropdownButton>
            <div>
                {leagueLinks.map((link, index) => {
                    return <Link to={`/leagueandfixtures?divisionId=${link.DivisionId}`}>{link.divisionName}</Link>
                })}
            </div>
        </div>
    </div>
    );




}

export default LeagueSelection;