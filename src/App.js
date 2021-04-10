import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import TopNav from './components/topmenu/TopNav';
import Home from './components/pages/Home';
import Officers from './components/officers/Officers';

import LeagueAndFixturePage from './components/league/LeagueAndFixturePage';
import FriendlyFixturesWrapper from './components/fixtures/FriendlyFixturesWrapper';

import friendlyFixtureGroups from "./data/friendlyFixtures_groups.json"

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import { Container } from 'react-bootstrap';


function App() {
  return (
    <Router>
      <div className="App">
        <TopNav fixtureGroups={friendlyFixtureGroups} />
        <div>
          <Route exact path="/" component={Home} />
          <Container>
          <Route path="/tabaofficers"><Officers organisation={'TADBA'} /></Route>
          <Route path="/talbaofficers"> <Officers organisation={'TALBA'} /></Route>
          <Route path="/tdbapremleague"> <LeagueAndFixturePage divisionId={'T_DBA_Premier_League2020'} leagueNameProp={'T&DBA Premier League'} /></Route>
          <Route path="/tdbadivoneleague"><LeagueAndFixturePage divisionId={'T_DBA_Division_One2020'} leagueNameProp={'T&DBA Division One'} /></Route>
          <Route path="/tdbadivtwoleague"><LeagueAndFixturePage divisionId={'T_DBA_Division_Two2020'} leagueNameProp={'T&DBA Division Two'} /></Route>
          <Route path="/talbadivoneleague"><LeagueAndFixturePage divisionId={'TALBA_Division_One2020'} leagueNameProp={'TALBA Division One'} /></Route>
          <Route path="/talbadivtwoleague"><LeagueAndFixturePage divisionId={'TALBA_Division_Two2020'} leagueNameProp={'TALBA Division Two'} /></Route>
          {friendlyFixtureGroups.map((fixtureGroup, index) => {
            if (fixtureGroup.active) {
              const path = "/friendlyfixtures/" + fixtureGroup.id
              return <Route path={path}><FriendlyFixturesWrapper fixtureGroupIdProps={fixtureGroup.id} fixtureGroupNameProps={fixtureGroup.name} /></Route>
            }
          })}
          </Container>
        </div>
      </div>
    </Router>
  );
}


export default App;
