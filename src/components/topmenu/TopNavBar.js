import React, {useState} from 'react';

import {Link} from 'react-router-dom'
import LeagueSubmenu from "./LeagueSubmenu"
import FixtureSubmenu from "./FixtureSubmenu"
import OfficerSubmenu from "./OfficerSubmenu"
import LinkSubmenu from "./LinkSubmenu"

// This is now not a className but a function you can pass props as arguments
const TopNavBar = () => {

  // This is now the way of setting state, the default state is stored in the first item of the array
  // The second item is a function which will update the state of the first item,
  // The Default state is declared with useState() you can pass anything inbetween the brackets

  const [showLeagueMenu, setShowLeagueMenu] = useState(false)
  const [showOfficerMenu, setShowOfficerMenu] = useState(false)
  const [showLinkMenu, setShowLinkMenu] = useState(false)
  const [showFixtureMenu, setShowFixtureMenu] = useState(false)

  const handleHoverLeagueMenu = () => {
    //This is updating the state of showLeagueMenu to true/false
    setShowLeagueMenu(!showLeagueMenu)
  }

  const handleHoverOfficerMenu = () => {
    setShowOfficerMenu(!showOfficerMenu)
  }

  const handleHoverLinks = () =>{
    setShowLinkMenu(!showLinkMenu)
  }

  const handleHoverFixtureMenu = () =>{
    setShowFixtureMenu(!showFixtureMenu)
  }

  //No render is required within a functional component you can just return the HTML.
  return (
    <>
      <Link to="/">  <button className="dropbtn">Home</button></Link>
        <div className="dropdown" onMouseLeave={() => handleHoverLeagueMenu()} onClick={() => handleHoverLeagueMenu()} onMouseEnter={() => handleHoverLeagueMenu()}>
          <button className="dropbtn">League</button>
            <div className="dropdown-content">
              {showLeagueMenu && <LeagueSubmenu/> }
            </div>
        </div>
        <div className="dropdown" onMouseLeave={() => handleHoverFixtureMenu()} onClick={() => handleHoverFixtureMenu()} onMouseEnter={() => handleHoverFixtureMenu()}>
          <button className="dropbtn">Fixtures</button>
            <div className="dropdown-content">
              {showFixtureMenu && <FixtureSubmenu/> }
            </div>
        </div>
        <div className="dropdown" onMouseLeave={() => handleHoverOfficerMenu()} onClick={() => handleHoverOfficerMenu()} onMouseEnter={() => handleHoverOfficerMenu()}>
          <button className="dropbtn">Officers</button>
            <div className="dropdown-content">
              {showOfficerMenu && <OfficerSubmenu/> }
            </div>
        </div>
        <div className="dropdown" onMouseLeave={() => handleHoverLinks()} onClick={() => handleHoverLinks()} onMouseEnter={() => handleHoverLinks()}>
          <button className="dropbtn">Links</button>
            <div className="dropdown-content">
              {showLinkMenu && <LinkSubmenu/> }
            </div>
        </div>
    </>   
  );
}

export default TopNavBar

