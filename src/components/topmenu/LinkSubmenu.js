import React from 'react';
import { NavDropdown } from 'react-bootstrap';


function LinkSubmenu() {
  return (
    <NavDropdown title="Useful Links" id="basic-nav-dropdown" style={{ color: 'grey', paddingTop: 0, padding: 15 }}>
      <NavDropdown.Item href="https://www.ecba.co.uk/" target="_blank">Essex Outdoor B.A</NavDropdown.Item>
      <NavDropdown.Item href="https://www.bowlsengland.com/" target="_blank">English Outdoor B.A</NavDropdown.Item>
      <NavDropdown.Item href="http://ecbagroup9.co.uk/" target="_blank">Group nine Outdoor B.A</NavDropdown.Item>
    </NavDropdown>
  )


}



export default LinkSubmenu;
