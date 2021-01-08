import React, {useState} from 'react';

import {Link} from 'react-router-dom'

const FixtureSubmenu = () => {
    return (
      <ul className="nav__submenu">
        <li className="nav__submenu-item ">
          <Link to="/indoorfixtures">Indoor Fixtures</Link>
        </li>
        <li className="nav__submenu-item ">
          <Link to="/outdoorfixtures">Outdoor Fixtures</Link>
        </li>
        <li className="nav__submenu-item ">
          <Link to="/ladiesfixtures">Ladies Fixtures</Link>
        </li>
      </ul>
    );
  }

 
export default FixtureSubmenu;



