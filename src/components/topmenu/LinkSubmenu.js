import React, {Component} from 'react';

import {Link} from 'react-router-dom'

class OfficerSubmenu extends React.Component {
  
  render() {
    return (
      <ul className="nav__submenu">
        <li className="nav__submenu-item ">
          <a href="https://www.ecba.co.uk/" target="_blank">Essex Outdoor B.A</a>
        </li>
        <li className="nav__submenu-item ">
          <a href="https://www.bowlsengland.com/" target="_blank">English Outdoor B.A</a>
        </li>
        <li className="nav__submenu-item ">
          <a href="http://ecbagroup9.co.uk/" target="_blank">Group nine Outdoor B.A</a>
        </li>
      </ul>
    )
  }
}
 
export default OfficerSubmenu;
