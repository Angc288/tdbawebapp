import React, {useState} from 'react';

import {Link} from 'react-router-dom'

const LeagueSubmenu = () => {
    return (
      <ul className="nav__submenu">
        <li className="nav__submenu-item ">
          <Link to="/tdbapremleague">T&DBA Premier League </Link>
        </li>
        <li className="nav__submenu-item ">
          <Link to="/tdbadivoneleague">T&DBA Divison One</Link>
        </li>
         <li className="nav__submenu-item ">
          <Link to="/tdbadivtwoleague">T&DBA Divison Two</Link>
        </li>
        <li className="nav__submenu-item ">
          <Link to="/talbadivoneleague">TALBA Divison One</Link>
        </li>
         <li className="nav__submenu-item ">
          <Link to="/talbadivtwoleague">TALBA Divison Two</Link>
        </li>
        <li className="nav__submenu-item ">
          <Link to="/previousleaguechampions">Previous League Winners</Link>
        </li>
        <li className="nav__submenu-item ">
          <Link to="/ateamplayers">A Team Nominated Players</Link>
        </li>
      </ul>
    );
  }

 
export default LeagueSubmenu;



