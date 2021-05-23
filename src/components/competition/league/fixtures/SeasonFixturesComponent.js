import React, { useState } from 'react';
import RoundComponent from './RoundComponent';


function SeasonFixturesComponent({seasonsFixturesParam, editable}) {

    const [seasonState, setSeasonState] = useState(seasonsFixturesParam)

    React.useEffect(() => {
		setSeasonState(seasonsFixturesParam)
	}, [seasonsFixturesParam]);

    seasonState.sort((a, b) => a.id - b.id)

    seasonState.forEach(round => {
        round.fixtures.sort((a, b) => a.id.localeCompare(b.id))
    });

    console.log('in the season fixture component')

    // console.log(seasonState)
    // console.log(seasonsFixturesParam)

    return (
        <div>
            {seasonState.map((round, roundIndex) =>
                <RoundComponent roundParam={round} editable={editable}></RoundComponent>
            )}
        </div>
    )

}

export default SeasonFixturesComponent;