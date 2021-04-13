import React from 'react';
import { NavDropdown } from 'react-bootstrap';
import { Link } from "react-router-dom";

const LeagueSubmenu = () => {
  return (
    <NavDropdown title="League" id="basic-nav-dropdown">
      <NavDropdown.Item><Link to={`/leagueandfixtures?divisionId=T_DBA_Division_One2019`}>TALBA Divison Test</Link></NavDropdown.Item>
    </NavDropdown>
  );
}

export default LeagueSubmenu;



