import React from 'react';

function FixtureBlock({ rounds }) {

    rounds.sort((a, b) => a.id - b.id)

    rounds.forEach(round => {
        round.fixtures.sort((a, b) => a.id.localeCompare(b.id))
    });

    return (
        rounds.map((round, roundIndex) =>
            <div style={{
                marginBottom: 30,
            }}>
                <table
                    style={{
                        width: '100%',
                        height: 200,
                        borderCollapse: 'collapse'
                    }}>
                    <tbody>
                        <tr>
                            <h3 style={{
                                textAlign: 'left',
                                paddingLeft: 60
                            }}
                            >{round['date']}</h3>
                        </tr>
                    </tbody>
                    {round['fixtures'].map((fixture, fixtureIndex) =>
                        <tbody
                            style={{
                                width: 100,
                                borderBottom: 'solid 20px white'
                            }}>
                            <tr
                                style={{
                                    background: '#E8E8E8'
                                }}>
                                <td style={{
                                    textAlign: 'left',
                                    paddingLeft: 20
                                }}>
                                    <p>{fixture['team1']}</p>
                                    <p style={{
                                        margin: 0
                                    }}>{fixture['team2']}</p>
                                </td>
                                <td>
                                    <p
                                    >{fixture['team1Score']}</p>
                                    <p style={{
                                        margin: 0
                                    }}>{fixture['team2Score']}</p>
                                </td>
                            </tr>
                        </tbody>
                    )}
                </table>
            </div>
        )
    )
}

export default FixtureBlock;