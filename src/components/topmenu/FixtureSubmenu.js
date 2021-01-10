import React from 'react';
import {NavDropdown} from 'react-bootstrap';

const FixtureSubmenu = () => {
    return (
            <NavDropdown title="Fixture" id="basic-nav-dropdown">
            <NavDropdown.Item href="/indoorfixtures">Indoor Fixtures</NavDropdown.Item>
            <NavDropdown.Item href="/outdoorfixtures">Outdoor Fixtures</NavDropdown.Item>
            <NavDropdown.Item href="/ladiesfixtures">Ladies Fixtures</NavDropdown.Item>
            </NavDropdown>
             )
  }

 
export default FixtureSubmenu;



