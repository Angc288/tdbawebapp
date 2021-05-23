import React, { useState } from 'react';
import MatchComponent from './MatchComponent';


function RoundComponent({ roundParam, editable }) {

    const [roundState, setRoundState] = useState(roundParam)

    React.useEffect(() => {
		setRoundState(roundParam)
	}, [roundParam]);


    return (
        <div>
            <h3>{roundState.id}</h3>
            {roundState.fixtures.map((fixture, roundIndex) =>
                <MatchComponent matchParam={fixture} editable={editable}></MatchComponent>
            )}
        </div>
    )

}

export default RoundComponent;