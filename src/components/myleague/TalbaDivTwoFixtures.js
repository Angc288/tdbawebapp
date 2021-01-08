import React, {Component} from 'react';
import LeagueStructure from './LeagueStructure';
import LeagueFixture from '../fixtures/LeagueFixture'
import TalbaDivTwoFixturesData from "../../data/talbaDivTwoFixtures.json"

class TalbaDivTwoFixtures extends Component{
  	state= {
		league: TalbaDivTwoFixturesData
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

export default TalbaDivTwoFixtures;