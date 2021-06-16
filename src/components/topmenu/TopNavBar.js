import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import FixtureSubmenu from "./FixtureSubmenu"
import OfficerSubmenu from "./OfficerSubmenu"
import LinkSubmenu from "./LinkSubmenu"
import { NavHashLink } from 'react-router-hash-link';

// This is now not a className but a function you can pass props as arguments
function TopNavBar() {
  //No render is required within a functional component you can just return the HTML.
  return (
    <>
      <Navbar expand="sm" sticky="top" >
        <Navbar.Brand href="/">Thurrock & District Bowls Association</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <NavHashLink class="nav-link" activeClassName="nav-link" smooth to="/#about">About Us</NavHashLink>
            <NavHashLink class="nav-link" activeClassName="nav-link" smooth to="/#latestnews">Latest News</NavHashLink>
            <NavHashLink class="nav-link" activeClassName="nav-link" smooth to="/#competitions">Competitions</NavHashLink>
            <NavHashLink class="nav-link" activeClassName="nav-link" smooth to="/#officers">Officers</NavHashLink>
            <NavHashLink class="nav-link" activeClassName="nav-link" smooth to="/#contactus">Contact Us</NavHashLink>
            <LinkSubmenu />
            <Nav.Link href="/admin">Admin</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default TopNavBar

