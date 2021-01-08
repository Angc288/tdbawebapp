import React, {Component} from 'react';
import jsonData from "../../data/outdoorFixtures.json"
import styled from "styled-components";

class OutdoorFixtures extends Component{
  	state = {
      fixtures: jsonData,
    }

   buildTableRow = () => {
		return this.state.fixtures.map((fixture, index) =>
			<Tr position={index}>
			    <TdNumber>
         	  {fixture['matchId']}
        	</TdNumber>
       		<TdNumber>
         	  {fixture['date']}
      		</TdNumber>
		    	<TdNumber>
         	 {fixture['opponent']}
		    	</TdNumber>
            <TdNumber>
                {fixture['dress']}
            </TdNumber>
            <TdNumber>
                {fixture['noOfRinks']}
            </TdNumber>
            <TdNumber>
                {fixture['home']}
            </TdNumber>
            <TdNumber>
                {fixture['venue']}
            </TdNumber>
            <TdNumber>
                {fixture['time']}
            </TdNumber>
			</Tr>
			)
    }


	render() {
		return (
			<MainWrapper>
				<Table>
					<TableHeader/>
					{this.buildTableRow()}
				</Table>
			</MainWrapper>
		)	
	}
}


const TableHeader = () =>
  <div style={{ display: "flex", flexDirection: 'row' }}>
      <Th>Match Id</Th>
      <Th>Date</Th>
      <Th>Opponent</Th>
      <Th>Dress</Th>
      <Th>No. of Rinks</Th>
      <Th>Home or Away</Th>
      <Th>Venue</Th>
      <Th>Time</Th>
  </div>

const Th = styled.div`
  width: 8em;
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
const Tr = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #E8E8E8;
`
const TdPosName = styled.div`
  padding: .5em;
  border-bottom: solid #360037 1px;
`
const TdNumber = styled.div`
  box-sizing: content-box;
  padding: .5em;
  width: 8em;
  border: solid #360037 1px;
  border-top: 0;
  border-right: 0;`

const MainWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  font-weight: 300;
  padding: 2em 0;`

export default OutdoorFixtures;