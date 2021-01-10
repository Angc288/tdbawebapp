import React from 'react';
import {NavDropdown} from 'react-bootstrap';

const LeagueSubmenu = () => {
    return (
      <NavDropdown title="League" id="basic-nav-dropdown">
            <NavDropdown.Item href="/tdbapremleague">T&DBA Premier League</NavDropdown.Item>
            <NavDropdown.Item href="/tdbadivoneleague">T&DBA Divison One</NavDropdown.Item>
            <NavDropdown.Item href="/tdbadivtwoleague">T&DBA Divison Two</NavDropdown.Item>
            <NavDropdown.Item href="/talbadivoneleague">TALBA Divison One</NavDropdown.Item>
            <NavDropdown.Item href="/talbadivtwoleague">TALBA Divison Two</NavDropdown.Item>
          </NavDropdown>
    );
  }

 
export default LeagueSubmenu;



