import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import LinkSubmenu from "./LinkSubmenu"
import { animateScroll } from 'react-scroll';
import TopNavBrand from "./TopNavBrand"
import TopNavLink from "./TopNavLink";


// This is now not a className but a function you can pass props as arguments
function TopNavBar({ place }) {

  const [barColour, setBarColour] = useState('light')
  const [activeOption, setActiveOption] = useState()
  const [expanded, setExpanded] = useState(false)

  const offset = -140
  const minDuration = 500


  const scrollToTop = () => {
    setBarColour('light')
    if (place === "a") {
      animateScroll.scrollToTop()
      setActiveOption()
    } else {
      //TODO link to home page
    }
  }

  const handleSetActive = (link) => {
    setBarColour('light')
    setActiveOption(link)
    console.log(link)
  }

  return (
    <>

      <Navbar expanded={expanded} expand="sm" fixed="top" bg={barColour} variant="light" >
        <Navbar.Brand onClick={scrollToTop}><TopNavBrand /></Navbar.Brand>
        <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          {place === "a" ? <Nav>
            <TopNavLink onClick={() => setExpanded(false)} to="about" handleSetActive={handleSetActive} name="About Us" place={place} />
            <TopNavLink onClick={() => setExpanded(false)} to="latestnews" handleSetActive={handleSetActive} name="Latest News" place={place} />
            <TopNavLink onClick={() => setExpanded(false)} to="competitions" handleSetActive={handleSetActive} name="Competitions" place={place} />
            <TopNavLink onClick={() => setExpanded(false)} to="officers" handleSetActive={handleSetActive} name="Officers" place={place} />
            <TopNavLink onClick={() => setExpanded(false)} to="contactus" handleSetActive={handleSetActive} name="Contact Us" place={place} />
            <LinkSubmenu />
            <Nav.Link onClick={() => setExpanded(false)} href="/admin" style={{ color: 'grey', padding: 15 }}>Admin</Nav.Link>
          </Nav>
            :
            <Nav>
              <TopNavLink onClick={() => setExpanded(false)} to="about" handleSetActive={handleSetActive} name="Back to Main" place={place} />
            </Nav>
          }
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default TopNavBar

