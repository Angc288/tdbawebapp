import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import LinkSubmenu from "./LinkSubmenu"
import { Link, animateScroll } from 'react-scroll';
import TopNavBrand from "./TopNavBrand"
import TopNavLink from "./TopNavLink";

// This is now not a className but a function you can pass props as arguments
function TopNavBar() {

  const [barColour, setBarColour] = useState('transparent')

  const offset = -140
  const minDuration = 500


  const scrollToTop = () => {
    setBarColour('transparent')
    animateScroll.scrollToTop()
  }


  const handleSetActive = (link) => {

    console.log(link)
    setBarColour('light')
  }

  return (
    <>
      <Navbar expand="sm" fixed="top" bg={barColour} variant="dark">
        <Navbar.Brand onClick={scrollToTop}><TopNavBrand></TopNavBrand></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <TopNavLink to="about" handleSetActive={handleSetActive} name="About Us" />
            <TopNavLink to="latestnews" handleSetActive={handleSetActive} name="Latest News" />
            <TopNavLink to="competitions" handleSetActive={handleSetActive} name="Competitions" />
            <TopNavLink to="officers" handleSetActive={handleSetActive} name="Officers" />
            <TopNavLink to="contactus" handleSetActive={handleSetActive} name="Contact Us" />
            <LinkSubmenu/>
            <Nav.Link href="/admin" style={{color:'grey', padding:15}}>Admin</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default TopNavBar

