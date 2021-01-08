import React, {Component} from 'react';
import LeagueStructure from './LeagueStructure';
import LeagueFixture from '../fixtures/LeagueFixture'
import TalbaDivOneFixturesData from "../../data/talbaDivOneFixtures.json"

class TalbaDivOneFixtures extends Component{
  	state= {
		league: TalbaDivOneFixturesData
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

export default TalbaDivOneFixtures;