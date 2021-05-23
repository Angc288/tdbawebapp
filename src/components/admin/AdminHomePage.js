import React, { useState } from 'react';
import { Link } from "react-router-dom";

const AdminHomePage = () => {

    return (<div>
        <div style={{
            padding: 20
        }}>
            <Link style={{
                padding: 20
            }} to={'/admin/createnewleague'}>Create New League</Link>
            <Link style={{
                padding: 20
            }} to={'/admin/updatefixture'}>Update fixture with result</Link>
        </div>
    </div>
    );

}

export default AdminHomePage;