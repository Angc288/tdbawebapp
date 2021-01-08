import React, {Component} from 'react';
import LeagueStructure from './LeagueStructure';
import TdbaDivTwoFixturesData from "../../data/tdbaDivTwoFixtures.json"
import LeagueFixture from '../fixtures/LeagueFixture'

class TdbaDivTwoFixtures extends Component{
  	state= {
		league: TdbaDivTwoFixturesData
	}

	render() {
	  return( 
	  		<div>
	  			<LeagueStructure someData={this.state.league}/>
		 		<LeagueFixture someData={this.state.league}/>
			</div>
		    );
		}
}

export default TdbaDivTwoFixtures;