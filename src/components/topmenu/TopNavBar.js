import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import LeagueSubmenu from "./LeagueSubmenu"
import FixtureSubmenu from "./FixtureSubmenu"
import OfficerSubmenu from "./OfficerSubmenu"
import LinkSubmenu from "./LinkSubmenu"
import { NavHashLink } from 'react-router-hash-link';

// This is now not a className but a function you can pass props as arguments
function TopNavBar({ fixtureGroups }) {
  //No render is required within a functional component you can just return the HTML.
  return (
    <>
      <Navbar background-color="white" expand="sm" sticky="top">
        <Navbar.Brand href="/">Thurrock & District Bowls Association</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <LeagueSubmenu />
            <OfficerSubmenu />
            <FixtureSubmenu fixtureGroupsProps={fixtureGroups} />
            <LinkSubmenu />
            <NavHashLink smooth to="/one#insideThree">Link to Hash Fragment</NavHashLink>
            <Nav.Link href="/one">One</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default TopNavBar

