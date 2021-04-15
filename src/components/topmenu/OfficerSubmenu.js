import React from 'react';
import { NavDropdown } from 'react-bootstrap';
import { Link } from "react-router-dom";

class OfficerSubmenu extends React.Component {

  render() {
    return (
      <NavDropdown title="Officer" id="basic-nav-dropdown">
        <NavDropdown.Item><Link to={`/officers?organisation=TADBA`}>TABA Officers</Link></NavDropdown.Item>
        <NavDropdown.Item><Link to={`/officers?organisation=TALBA`}>TALBA Officers</Link></NavDropdown.Item>
      </NavDropdown>
    )
  }
}

export default OfficerSubmenu;
