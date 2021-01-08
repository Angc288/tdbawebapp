import React, {Component} from 'react';
import styled from "styled-components";

class OfficerTable extends Component {

   buildTableRow = () => {
		return this.props.someData.map((position, index) =>
					<Tr position={index}>
						<TdNumber>
         					 {position['role']}
        				</TdNumber>
       					<TdNumber>
         					 {position['holder'] !== null ? position['holder'] : 'Vaycant'}
      					</TdNumber>
				        <TdNumber>
         					 {position['club']}
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
  <div style={{ display: "flex", flexDirection: 'row-reverse' }}>
      <Th>Position</Th>
      <Th>Holder(s)</Th>
      <Th>Clubs</Th>
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



export default OfficerTable;
