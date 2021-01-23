import React, {useState} from 'react';
import OfficerTable from "./OfficerTable";

function TalbaOfficers() {
	const [talbaOffers, setTalbaOffers] = useState([])
	const [officersLoaded, setLoaded] = useState(false)

	React.useEffect(() => {
		if (!officersLoaded) {
			fetch('https://korkszmntc.execute-api.eu-west-2.amazonaws.com/PRD/officers?organisation=TALBA')
			.then(results => results.json())
			.then(data => {
				setTalbaOffers(data);
				setLoaded(true);
			});
		}
	  }, [officersLoaded]);

	  return ( 
		officersLoaded ?
		(<div>
			<h2>TALBA Officers</h2>
			<OfficerTable officers={talbaOffers}/>
		</div>)
		:<div>Loading</div>
	)
}

export default TalbaOfficers;
