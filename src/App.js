import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import TopNav from './components/topmenu/TopNav';
import Home from './components/pages/Home';
import Officers from './components/officers/Officers';

import LeagueAndFixturePage from './components/league/LeagueAndFixturePage';
import FriendlyFixturesWrapper from './components/fixtures/FriendlyFixturesWrapper';
import LeagueSelection from './components/league/LeagueSelection';
import friendlyFixtureGroups from "./data/friendlyFixtures_groups.json"

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import { Container } from 'react-bootstrap';


function App() {
  return (
    <Router>
      <div className="App">
        <TopNav fixtureGroups={friendlyFixtureGroups} />
        <Container>
          <Route exact path="/" component={Home} />
          <Route path="/tabaofficers"><Officers organisation={'TADBA'} /></Route>
          <Route path="/talbaofficers"> <Officers organisation={'TALBA'} /></Route>
          <Route path="/leagueselection"> <LeagueSelection/></Route>
          <Route path="/leagueandfixtures"> <LeagueAndFixturePage/></Route>
          {friendlyFixtureGroups.map((fixtureGroup, index) => {
            if (fixtureGroup.active) {
              const path = "/friendlyfixtures/" + fixtureGroup.id
              return <Route path={path}><FriendlyFixturesWrapper fixtureGroupIdProps={fixtureGroup.id} fixtureGroupNameProps={fixtureGroup.name} /></Route>
            }
          })}
        </Container>
      </div>
    </Router>
  );
}


export default App;
