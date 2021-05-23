import React, { useState } from 'react';


function MatchParticipantComponent({ teamName, teamScore, editable, scoreChangedAction }) {

    const [teamNameState, setTeamNameState] = useState(teamName)
    const [teamScoreState, setTeamScoreState] = useState(teamScore)


    React.useEffect(() => {
        setTeamScoreState(teamScore)
        setTeamNameState(teamName)
	}, [teamName, teamScore]);

    const scoreChanged = (e) => {
        setTeamScoreState(e)
        scoreChangedAction(e)
    }

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            position: 'relative'
        }}>
            <p style={{ textAlign: 'left', paddingLeft: 20 }}>{teamNameState} </p> 
            
            {editable ? 
                    <input type="text" value={teamScoreState} onChange={e => scoreChanged(e.target.value)} style={{
                        width: 45,textAlign: 'right', right:0, position: 'absolute', paddingRight: 20
                    }} />
                    :
                    <p style={{ textAlign: 'right', right:0, position: 'absolute', paddingRight: 20}}>{teamScoreState} </p>
        }
            
        </div>
    )

}

export default MatchParticipantComponent;