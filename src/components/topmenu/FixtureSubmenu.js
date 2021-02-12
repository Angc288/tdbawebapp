import React, { useState } from 'react';
import { NavDropdown } from 'react-bootstrap';

function FixtureSubmenu({ fixtureGroupsProps }) {

  const [fixtureGroups, setFixtureGroups] = useState(fixtureGroupsProps)

  return (
    <NavDropdown title="Fixture" id="basic-nav-dropdown">
      {fixtureGroups.map((fixtureGroup, index) => {
        if (fixtureGroup.active) {
          return <NavDropdown.Item href={"/friendlyfixtures/" + fixtureGroup.id}>{fixtureGroup.name}</NavDropdown.Item>
        }

      })}
    </NavDropdown>
  )
}


export default FixtureSubmenu;



