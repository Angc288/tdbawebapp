import React, {Component} from 'react';
import teamData from "../../data/teams.json"
import styled from "styled-components";


class LeagueFixture extends Component {
	state = {
      teams: teamData
    };

   buildTableRow = (someData) => {

     var teamsMapped = this.state.teams.reduce((a,team) => ({...a, [team.id]: team}),{})

    	return someData['rounds'].map((round, index) =>  
    			<WeeklyFixture> 
            <h4>{round['date']}</h4>
    				{round['fixtures'].map((fixture, index) =>
    					<Fixture>
                  {teamsMapped[fixture['team1']].name} 
                  <Score> {fixture['team1Score']} </Score> v <Score> {fixture['team2Score']} </Score>
                    {teamsMapped[fixture['team2']].name} 
               </Fixture>
    					)}
    			</WeeklyFixture>		
	)}

	render(){
		return( 
			<FixtureWrapper>
				{this.buildTableRow(this.props.someData)}
			</FixtureWrapper>
		)
	}
}

const FixtureWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  font-weight: 300;
  padding: 2em 0;
  flex-wrap:wrap;
`

const WeeklyFixture = styled.div`
  padding: 1em;
  width: 25%;
  float: left;`

 const Fixture = styled.div`
   color: black
 `
   const Score = styled.div`
   color: red;
   display: inline;
 `

export default LeagueFixture;