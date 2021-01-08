import React, {Component} from 'react';
import LeagueStructure from './LeagueStructure';
import TdbaDivOneFixturesData from "../../data/tdbaDivOneFixtures.json"
import LeagueFixture from '../fixtures/LeagueFixture'

class TdbaDivOneFixtures extends Component{
  	state= {
		league: TdbaDivOneFixturesData
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

export default TdbaDivOneFixtures;