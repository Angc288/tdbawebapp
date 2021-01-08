import React, {Component} from 'react';
import LeagueStructure from './LeagueStructure';
import TdbaPremFixturesData from "../../data/tdbaPremFixtures.json"
import LeagueFixture from '../fixtures/LeagueFixture'

class TdbaPremFixtures extends Component{
  	state= {
		league: TdbaPremFixturesData
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

export default TdbaPremFixtures;