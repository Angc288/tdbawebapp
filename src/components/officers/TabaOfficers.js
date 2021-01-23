import React, {useState} from 'react';
import OfficerTable from "./OfficerTable";

function TadbaOfficers() {
	const [tadbaOffers, setTadbaOffers] = useState([])
	const [officersLoaded, setLoaded] = useState(false)

	React.useEffect(() => {
		if (!officersLoaded) {
			fetch('https://korkszmntc.execute-api.eu-west-2.amazonaws.com/PRD/officers?organisation=TADBA')
			.then(results => results.json())
			.then(data => {
				setTadbaOffers(data);
				setLoaded(true);
			});
		}
	  }, [officersLoaded]);
	
	  return ( 
		officersLoaded ?
		(<div>
			<h2>T&DBA Officers</h2>
			<OfficerTable officers={tadbaOffers}/>
		</div>)
		:<div>Loading</div>
	)
}


export default TadbaOfficers;
