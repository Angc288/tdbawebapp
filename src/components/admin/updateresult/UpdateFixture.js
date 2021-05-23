import React, { useState } from 'react';


import SeasonFixturesComponent from '../../competition/league/fixtures/SeasonFixturesComponent';



const UpdateFixture = () => {

    const [fixtureData, setFixtureData] = useState()
    const [divisionsLoading, setDivisionsLoading] = useState(false)
    const [leagueLinks, setLeagueLinks] = useState([])
    const [borderWidth, setBorderWidth] = useState(1)

    const [divisionIds] = useState([])

    //on load of page we need to get all division links for 2020
    React.useEffect(() => {

        if (!divisionsLoading) {
            fetch('https://tjrlh6izkj.execute-api.eu-west-2.amazonaws.com/production/divisions?season=' + 2020 + '&organisation=TALBA')
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
                    setBorderWidth(0)
                });
            setDivisionsLoading(true)
        }
    }, [divisionIds]);


    const readFixtures = (link) => {

        fetch('https://tjrlh6izkj.execute-api.eu-west-2.amazonaws.com/production/leaguefixtures?divisionid=' + link.DivisionId)
            .then(results => results.json())
            .then(data => {
                setFixtureData(data);
            });
    }

    return (
        <div>
            <div style={{
                borderWidth: borderWidth,
                borderColor: 'blue',
                borderStyle: 'block',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around'
            }}>
                {leagueLinks.map((link, index) => {
                    return <input type="button" onClick={() => readFixtures(link)} value={link.divisionName} />
                })}
            </div>
            <div>
                {
                    fixtureData ?
                        <div>
                            <SeasonFixturesComponent seasonsFixturesParam={fixtureData} editable={true}/>
                        </div >
                        :
                        <div> Loading</div>
                }
            </div>
        </div>
    );
}

export default UpdateFixture;