import React from 'react';
import { NavDropdown } from 'react-bootstrap';

class OfficerSubmenu extends React.Component {

  render() {
    return (
      <NavDropdown title="Officer" id="basic-nav-dropdown">
        <NavDropdown.Item href="/tabaofficers">TABA Officers</NavDropdown.Item>
        <NavDropdown.Item href="/talbaofficers">TALBA Officers</NavDropdown.Item>
      </NavDropdown>
    )
  }
}

export default OfficerSubmenu;
