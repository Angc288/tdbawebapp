import React, { useState } from 'react';
import OfficerTable from "./OfficerTable";

function OfficersHome({ }) {
    const [tdbaOfficers, setTdbaOfficers] = useState()
    const [talbaOfficers, setTalbaOfficers] = useState()
    const [tdbaOfficersLoaded, setTdbaOfficersLoaded] = useState(false)
    const [talbaOfficersLoaded, setTalbaOfficersLoaded] = useState(false)

    const readTdbaOfficerFromSource = () => {

        if (!tdbaOfficersLoaded) {

            fetch('https://korkszmntc.execute-api.eu-west-2.amazonaws.com/PRD/officers?organisation=' + 'TADBA')
                .then(results => {
                    if (!results.ok) {
                        throw new Error('Something went wrong')
                    }
                    return results.json()
                })
                .then(data => {
                    setTdbaOfficers(data)
                    setTdbaOfficersLoaded(true)
                })
                .catch(error => {
                    setTdbaOfficers([])
                    setTdbaOfficersLoaded(true)
                });
        }

    }

    const readTalbaOfficerFromSource = () => {

        if (!talbaOfficersLoaded) {

            fetch('https://korkszmntc.execute-api.eu-west-2.amazonaws.com/PRD/officers?organisation=' + 'TALBA')
                .then(results => {
                    if (!results.ok) {
                        throw new Error('Something went wrong')
                    }
                    return results.json()
                })
                .then(data => {
                    setTalbaOfficers(data)
                    setTalbaOfficersLoaded(true)
                })
                .catch(error => {
                    setTalbaOfficers([])
                    setTalbaOfficersLoaded(true)
                });
        }

    }

    React.useEffect(() => {
        readTdbaOfficerFromSource()
        readTalbaOfficerFromSource()
    }, [tdbaOfficersLoaded, talbaOfficersLoaded]);


    return (
        <div id="officers" style={{paddingTop: 20}}>
            { tdbaOfficersLoaded ?
                (<OfficerTable data={tdbaOfficers} />)
                : <div> loading</div>}
            { talbaOfficersLoaded ?
                (<OfficerTable data={talbaOfficers} />)
                : <div> loading</div>}
        </div>

    )
}

export default OfficersHome;
