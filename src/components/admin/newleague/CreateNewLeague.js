import React, { useState, useCallback, useEffect, useRef } from 'react';
import AdminRound from './AdminRound';

const CreateNewLeague = () => {

    const [isSending, setIsSending] = useState(false)
    const isMounted = useRef(true)
    const [name, setName] = useState("")
    const [year, setYear] = useState()
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

    // set isMounted to false when we unmount the component
    useEffect(() => {
        return () => {
            isMounted.current = false
        }
    }, [])

    const sendRequest = useCallback(async () => {
        // don't send again while we are sending
        if (isSending) return
        // update state
        setIsSending(true)
        // send the actual request
        const rawResponse = await fetch('https://tjrlh6izkj.execute-api.eu-west-2.amazonaws.com/production/divisions', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
        setIsSending(false)

        const content = await rawResponse.json();
        console.log(content)
        // once the request is sent, update state again
        // if (isMounted.current) // only update if we are still mounted
    }, [isSending, body]) // update the callback if the state changes

    const nameChanged = (nameParam) => {
        setName(nameParam)
        setBody({ ...body, name: nameParam })
    }

    const yearChanged = (yearParam) => {
        setYear(parseInt(yearParam))
        setBody({ ...body, year: parseInt(yearParam)})
    }

    const newRoundAddedToUi = () => {
        setNumberOfRounds(numberOfRounds + 1)
    }

    const addRound = (round) => {
        rounds.push(round)
    }

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
            addRound(change)
        }

        setBody({ ...body, rounds: rounds })
    }

    return (
        <div>
            <input type="button" disabled={isSending} onClick={sendRequest} value="submit new league" />
            <label>
                Name:
                <input type="text" value={name} onChange={e => nameChanged(e.target.value)} />
            </label>
            <label>
                Season:
                <input type="text" value={year} onChange={e => yearChanged(e.target.value)} />
            </label>
            <input type="button" onClick={e => newRoundAddedToUi()} value="add round" />
            <div>
                {[...Array(numberOfRounds)].map((e, i) => <AdminRound callback={roundChanged} roundId={i} />)
                }
            </div>
        </div>
    )

}



export default CreateNewLeague;