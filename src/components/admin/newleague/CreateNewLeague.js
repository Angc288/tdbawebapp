import React, { useState, useCallback, useEffect, useRef } from 'react';
import AdminRound from './AdminRound';
import teams from "../../../data/teams.json"
import womensTeams from "../../../data/womensTeams.json"
import Select from 'react-select'
import { Container } from 'react-bootstrap';

const CreateNewLeague = () => {

    const [isSubmittingLeague, setSubmittingLeague] = useState(false)
    const isMounted = useRef(true)
    const [name, setName] = useState("")
    const [year, setYear] = useState()
    const [organisation, setOrganisation] = useState("TALBA")

    const [rounds] = useState([{
        id: 0,
        fixtures: []
    }
    ])
    const [body, setBody] = useState(
        {
            name: "",
            year: 0,
            rounds: []
        }
    )
    const [numberOfRounds, setNumberOfRounds] = useState(1)
    const [numberOfFixturesPerRound, setNumberOfFixturesPerRound] = useState(1)
    const [teamNames, setTeamNames] = useState(womensTeams)

    // set isMounted to false when we unmount the component
    // useEffect(() => {


    //     return () => {
    //         isMounted.current = false
    //     }
    // }, [numberOfFixturesPerRound])

    const submitNewLeague = useCallback(async () => {
        // don't send again while we are sending
        if (isSubmittingLeague) return
        // update state
        setSubmittingLeague(true)
        // send the actual request
        const rawResponse = await fetch('https://tjrlh6izkj.execute-api.eu-west-2.amazonaws.com/production/divisions', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });

        setSubmittingLeague(false)

        const content = await rawResponse.json();
        // once the request is sent, update state again
        // if (isMounted.current) // only update if we are still mounted
    }, [isSubmittingLeague, body]) // update the callback if the state changes

    const clearState = () => {
        setName(null)
    }

    const nameChanged = (nameParam) => {
        setName(nameParam)
        setBody({ ...body, name: nameParam })
    }

    const yearChanged = (yearParam) => {
        setYear(parseInt(yearParam))
        setBody({ ...body, year: parseInt(yearParam) })
    }

    const newRoundAddedToUi = () => {
        setNumberOfRounds(numberOfRounds + 1)
    }

    const numberOfRoundsChanged = (roundsParam) => {
        setNumberOfRounds(+roundsParam)
    }

    const numberOfTeamsChanged = (teamsParam) => {
        setNumberOfFixturesPerRound(Math.ceil(+teamsParam / 2))
    }

    //callback method, when the round is changed by another function
    const roundChanged = (change) => {

        var result = rounds.find(obj => {
            return obj.id === change.id
        })

        var findIndex = rounds.findIndex(obj => {
            return obj.id === change.id
        })

        if (result) {
            rounds[findIndex] = change
        } else {
            rounds.push(change)
        }

        setBody({ ...body, rounds: rounds })
    }

    const handleOrganisationChange = (event) => {
        setOrganisation(event.value)
        loadTeamsForOrg()
    }

    const loadTeamsForOrg = () => {

        // fetch('https://tjrlh6izkj.execute-api.eu-west-2.amazonaws.com/production/divisions?season=' + seasonParam + '&organisation=TALBA')
        //     .then(results => {
        //         if (!results.ok) {
        //             throw new Error('Something went wrong')
        //         }
        //         return results.json()
        //     })
        //     .then(data => {
        //         setLeagueLinks(data)
        //     })
        //     .catch(error => {
        //         setLeagueLinks([])
        //     });

        if (organisation === "TALBA") {
            setTeamNames(teams)
        } else {
            setTeamNames(womensTeams)
        }

    }

    const organisationSelectOptions = [
        { value: 'TDBA', label: 'T&DBA' },
        { value: 'TALBA', label: 'TALBA' }
    ]

    return (
        <Container>
            <div>
                <div style={{
                    width: 120
                }}>
                    <label style={{ padding: 10 }}>
                        Organisation:</label>
                    <Select options={organisationSelectOptions} onChange={handleOrganisationChange} name={organisation} style={{ padding: 20, width: 175 }} />
                </div>
                <label style={{ padding: 10 }}>
                    Name:
                    <input type="text" value={name} onChange={e => nameChanged(e.target.value)} style={{
                        width: 120
                    }} />
                </label>
                <label style={{ padding: 10 }}>
                    Season:
                    <input type="text" value={year} onChange={e => yearChanged(e.target.value)} style={{
                        width: 70
                    }} />
                </label>
                <label style={{ padding: 10 }}>
                    Number of teams:
                    <input type="text" value={numberOfFixturesPerRound * 2} onChange={e => numberOfTeamsChanged(e.target.value)} style={{
                        width: 35
                    }} />
                </label>
                <label style={{ padding: 10 }}>
                    Number of weeks:
                    <input type="text" value={numberOfRounds} onChange={e => numberOfRoundsChanged(e.target.value)} style={{
                        width: 35
                    }} />
                </label>
            </div>
            <input type="button" disabled={isSubmittingLeague} onClick={submitNewLeague} value="submit new league" />
            {/* <input type="button" onClick={e => newRoundAddedToUi()} value="add round" /> */}
            <div>
                {[...Array(numberOfRounds)].map((e, i) => <AdminRound callback={roundChanged} roundId={i} teamNames={teamNames} numberOfFixturesPerRound={numberOfFixturesPerRound} />)
                }
            </div>
        </Container>
    )

}



export default CreateNewLeague;