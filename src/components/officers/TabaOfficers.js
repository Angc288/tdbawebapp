import React, {Component} from 'react';
import jsonData from "../../data/tdbaOfficers.json";
import OfficerTable from "./OfficerTable";


class TabaOfficers extends Component {
	state = {
      tabaOfficers: jsonData
    };


	render(){
		return( 
			<div>
				<h2>Taba Officers</h2>
				<OfficerTable someData={this.state.tabaOfficers}/>
			</div>
		)
	}
}


export default TabaOfficers;
