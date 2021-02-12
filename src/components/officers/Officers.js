import React, { useState } from 'react';
import OfficerTable from "./OfficerTable";

function TadbaOfficers({ organisation }) {
	const [officers, setOfficers] = useState([])
	const [officersLoaded, setLoaded] = useState(false)

	React.useEffect(() => {
		if (!officersLoaded) {
			fetch('https://korkszmntc.execute-api.eu-west-2.amazonaws.com/PRD/officers?organisation=' + organisation)
				.then(results => results.json())
				.then(data => {
					setOfficers(data);
					setLoaded(true);
				});
		}
	}, [officersLoaded]);

	return (
		officersLoaded ?
			(<div>
				<h2>{organisation} Officers</h2>
				<OfficerTable officers={officers} />
			</div>)
			: <div>Loading</div>
	)
}

export default TadbaOfficers;
