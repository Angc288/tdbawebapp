import React, {useState} from 'react';
import OfficerTable from "./OfficerTable";

function TadbaOfficers() {
	const [tadbaOffers, setTadbaOffers] = useState([])
	const [officersLoaded, setLoaded] = useState(false)

	console.log("in tabda officers")

	React.useEffect(() => {
		fetch('https://korkszmntc.execute-api.eu-west-2.amazonaws.com/PRD/officers?organisation=TALBA')
		  .then(results => results.json())
		  .then(data => {
			setTadbaOffers(data);
			setLoaded(true);
		  });
	  }, [setLoaded]);



	  if (officersLoaded === false) {
		console.log(officersLoaded)
		return (
		  <div>hello</div>
		)
	  }


	  return( 
		<div>
			<h2>Taba Officers</h2>
			<OfficerTable officers={tadbaOffers} loading={officersLoaded}/>
		</div>
	)
}


export default TadbaOfficers;
