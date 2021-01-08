import React, {Component} from 'react';
import styled from "styled-components";
import LeagueTableRow from "./LeagueRow"
import teamData from "../../data/teams.json"

const newTeam = {
  id: 0,
  name: '',	
  won: 0,
  drawn: 0,
  lost: 0,
  goalFor: 0,
  goalAgainst: 0,
  point: 0
}


class LeagueStructure extends Component {
  state= {
    teams: teamData
  }

  renderTable = (someData) => {
  
    let teamsInLeague = {}
    let teamsData = this.state.teams


    someData['rounds'].forEach(function (round) {
    	 round['fixtures'].forEach(function (fixture) {
    	 	
    	 	  const team1 = fixture['team1']
    	 	  const team2 = fixture['team2']

          if (team1 !== undefined && team2 !== undefined) {
  	    	  if (!teamsInLeague[team1]) {
  	            teamsInLeague[team1] = Object.assign({}, newTeam)
  	          }
  	        if (!teamsInLeague[team2]) {
  	            teamsInLeague[team2] = Object.assign({}, newTeam)
  	          }

  	        const score1 = fixture['team1Score'] * 1 // performant string to number conversion
            const score2 = fixture['team2Score'] * 1

            teamsInLeague[team1].id = fixture['team1']
            teamsInLeague[team2].id = fixture['team2']
          
            teamsData.forEach(function (team){
                if (team['id'] === team1){
                    teamsInLeague[team1].name = team['name']
                  }
                if (team['id'] === team2) {
                    teamsInLeague[team2].name = team['name']
                }
            })

   		      teamsInLeague[team1].goalFor += score1
            teamsInLeague[team2].goalFor += score2
            teamsInLeague[team1].goalAgainst += score2
            teamsInLeague[team2].goalAgainst += score1
            if (score1 - score2 > 0) {
              teamsInLeague[team1].won += 1
              teamsInLeague[team2].lost += 1
              teamsInLeague[team1].point += 3
            } else if (score1 - score2 === 0) {
              teamsInLeague[team1].drawn += 1
              teamsInLeague[team2].drawn += 1
              teamsInLeague[team1].point += 1
              teamsInLeague[team2].point += 1
            } else {
              teamsInLeague[team1].lost += 1
              teamsInLeague[team2].won += 1
              teamsInLeague[team2].point += 3
            }
          }
    	 })
    })



    const sortedTeams = Object.entries(teamsInLeague).sort((teamA, teamB) => {
      if (teamA[1].point > teamB[1].point) {
        return -1
      } else if (teamA[1].point < teamB[1].point) {
        return 1
      } else {
        return -1
      }
    })


     return sortedTeams.map((team, index) =>
      <LeagueTableRow
        {...team[1]}
        key={team[0]}
        position={index + 1}
      />
    )
  }
	
  render() {
    return (
      <div>
         <h2>{this.props.someData['name']}</h2>
      <MainWrapper>
      <Table>
         <TableHeader />
         {this.renderTable(this.props.someData)}
       </Table>
      </MainWrapper>
      </div>
    )
  }
}

const TableHeader = () =>
  <div style={{ display: "flex", flexDirection: 'row-reverse' }}>
      <Th>Total Points</Th>
      <Th>Shot Difference</Th>
      <Th>Shots Against</Th>
      <Th>Shots For</Th>
      <Th>Rinks Lost</Th>
      <Th>Rinks Drawn</Th>
      <Th>Rinks Won</Th>
      <Th>Rinks Played</Th>
  </div>

 const Th = styled.div`
  width: 3.7em;
  padding: .5em;
  border-right: 0;
  font-weight: 400;
  color: white;
`
const Table = styled.div`
  letter-spacing: .02em;
  display: flex;
  flex-direction: column;
  text-align: center;
  background-color: #360037;
  color: black;
  border-radius: 3px;
`
const MainWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  font-weight: 300;
  padding: 3em 0;`




export default LeagueStructure;
