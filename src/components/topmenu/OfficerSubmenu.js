import React, {Component} from 'react';

import {Link} from 'react-router-dom'

class OfficerSubmenu extends React.Component {
  
  render() {
    return (
      <ul className="nav__submenu">
        <li className="nav__submenu-item ">
          <Link to="/tabaofficers">TABA Officers</Link>
        </li>
        <li className="nav__submenu-item ">
          <Link to="/talbaofficers">TALBA Officers</Link>
        </li>
      </ul>
    )
  }
}
 
export default OfficerSubmenu;
