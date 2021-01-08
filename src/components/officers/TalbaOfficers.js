import React, {Component} from 'react';
import jsonData1 from "../../data/talbaOfficers.json";
import OfficerTable from "./OfficerTable";


class TalbaOfficers extends Component {
	state = {
      talbaOfficers: jsonData1
    };

	render(){
		return( 
			<div>
				<h2>Talba Officers</h2>
				<OfficerTable someData={this.state.talbaOfficers}/>
			</div>
		)
	}
}


export default TalbaOfficers;
