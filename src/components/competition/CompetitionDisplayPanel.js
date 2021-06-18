import React, { useState } from 'react';
import { Link } from "react-router-dom";
import qs from 'query-string';
import Select from 'react-select'
import friendlyFixtureGroups from "../../data/friendlyFixtures_groups.json"

function CompetitionDisplayPanel({ linksParam, competionTypeParam }) {

    const [links, setLinks] = useState(linksParam)
    const [competitionType, setCompetitionType] = useState(competionTypeParam)
    const [borderWidth, setBorderWidth] = useState(1)

    React.useEffect(() => {
        setLinks(linksParam)
        setCompetitionType(competionTypeParam)
    }, [linksParam, competionTypeParam]);

    return (
        <div style={{
            borderWidth: borderWidth,
            borderColor: 'blue',
            borderStyle: 'solid',
            marginBottom: 20
        }}>
            <div>
                <h1>{competitionType}</h1>
            </div>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
                padding: 20
            }}>
                {links.map((link, index) => {
                    return <Link to={link.url} l>{link.name}</Link>
                })}
            </div>
        </div>
    );

}

export default CompetitionDisplayPanel;