import React, { useState } from 'react';
import OfficerTable from "./OfficerTable";
import {useLocation} from "react-router-dom";

function OfficersComponent({}) {
	const [officers, setOfficers] = useState()
	const [officersLoading, setLoading] = useState(false)
	const [officersLoaded, setLoaded] = useState(false)
	const [organisation, setOrganisation] = useState('')

	const location = useLocation()

	React.useEffect(() => {
		const params = new URLSearchParams(location.search)
		setOrganisation(params.get("organisation"))

		if (!officersLoaded && !officersLoading) {
			setLoading(true)
			fetch('https://korkszmntc.execute-api.eu-west-2.amazonaws.com/PRD/officers?organisation=' + params.get("organisation"))
				.then(results => results.json())
				.then(data => {
					setOfficers(data);
					setLoading(false)
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

export default OfficersComponent;
