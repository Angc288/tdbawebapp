import React from 'react';
import {NavDropdown} from 'react-bootstrap';

class LinkSubmenu extends React.Component {
  
  render() {
    return (
       <NavDropdown title="Link" id="basic-nav-dropdown">
            <NavDropdown.Item href="https://www.ecba.co.uk/" target="_blank">Essex Outdoor B.A</NavDropdown.Item>
            <NavDropdown.Item href="https://www.bowlsengland.com/" target="_blank">English Outdoor B.A</NavDropdown.Item>
            <NavDropdown.Item href="http://ecbagroup9.co.uk/" target="_blank">Group nine Outdoor B.A</NavDropdown.Item>
       </NavDropdown>
    )
  }
}
 
export default LinkSubmenu;
