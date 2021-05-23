import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import FixtureSubmenu from "./FixtureSubmenu"
import OfficerSubmenu from "./OfficerSubmenu"
import LinkSubmenu from "./LinkSubmenu"

// This is now not a className but a function you can pass props as arguments
function TopNavBar({ fixtureGroups }) {
  //No render is required within a functional component you can just return the HTML.
  return (
    <>
      <Navbar bg="light" expand="sm">
        <Navbar.Brand href="/">Thurrock & District Bowls Association</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/leagueselection">Competitions</Nav.Link>
            <OfficerSubmenu />
            {/* <FixtureSubmenu fixtureGroupsProps={fixtureGroups} /> */}
            <LinkSubmenu />
            <Nav.Link href="/admin">Admin</Nav.Link>
            <Nav.Link href="/contactus"> Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default TopNavBar

