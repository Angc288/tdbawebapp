import React, { useState } from 'react';
import { Link } from "react-router-dom";

const AdminHome = () => {

    return (<div>
        <h1>Admin Home</h1>
        <div>
            <Link to={'/admin/createnewleague'}>Create New League</Link>
            <Link to={'/admin/updatefixture'}>Update fixture with result</Link>
        </div>
    </div>
    );

}

export default AdminHome;