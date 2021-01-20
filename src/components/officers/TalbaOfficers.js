import React, {Component} from 'react';
import jsonData from "../../data/talbaOfficers.json";
import OfficerTable from "./OfficerTable";


class TalbaOfficers extends Component {
	state = {
      talbaOfficers: jsonData
    };

	render(){
		return( 
			<div>
				<h2>Talba Officers</h2>
				<OfficerTable officers={this.state.talbaOfficers}/>
			</div>
		)
	}
}


export default TalbaOfficers;
