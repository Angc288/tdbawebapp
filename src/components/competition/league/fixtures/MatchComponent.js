import React, { useState, useCallback } from 'react';
import MatchParticipantComponent from './MatchParticipantComponent';


function MatchComponent({ matchParam, editable }) {

    const [matchState, setMatchState] = useState(matchParam)
    const [isSubmittingScore, setSubmittingScore] = useState(false)
    const [hasHomeScoreChanged, setHasHomeScoreChanged] = useState(false)
    const [hasAwayScoreChanged, setHasAwayScoreChanged] = useState(false)


    React.useEffect(() => {
        setMatchState(matchParam)
    }, [matchParam]);



    const submitResult = (evt) => {
        evt.preventDefault();
        submitScore(matchState)
    }


    const homeScoreChanged = (score) => {
        setMatchState({...matchState, team1Score : score})
        setHasHomeScoreChanged(true)
    }

    const awayScoreChanged = (score) => {
        setMatchState({...matchState, team2Score : score})
        setHasAwayScoreChanged(true)
    }

    const submitScore = useCallback(async (fixture) => {

        if (isSubmittingScore) return
        setSubmittingScore(true)
        setHasHomeScoreChanged(false)
        setHasAwayScoreChanged(false)
        const rawResponse = await fetch('https://tjrlh6izkj.execute-api.eu-west-2.amazonaws.com/production/leaguefixtures/' + fixture.id, {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                team1Score: +fixture.team1Score,
                team2Score: +fixture.team2Score
            })
        });
        setSubmittingScore(false)

    }, [isSubmittingScore]) // update the callback if the state changes

    return (
        <div style={{
            background: '#E8E8E8',
            margin: 30,
            position: 'relative'
        }}>
            <form onSubmit={submitResult}>
                <MatchParticipantComponent teamName={matchState.team1} teamScore={matchState.team1Score} editable={editable} scoreChangedAction={homeScoreChanged}></MatchParticipantComponent>
                <MatchParticipantComponent style={{
                    position: 'absolute',
                    bottom: 0
                }} teamName={matchState.team2} teamScore={matchState.team2Score} editable={editable} scoreChangedAction={awayScoreChanged}></MatchParticipantComponent>
                {editable ?
                    <input type="submit" value="Submit" disabled={!hasHomeScoreChanged && !hasAwayScoreChanged}/> :
                    <div></div>
                }
            </form>
        </div>
    )

}

export default MatchComponent;