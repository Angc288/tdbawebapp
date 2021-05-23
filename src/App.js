import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import TopNav from './components/topmenu/TopNav';
import Home from './components/pages/Home';
import ContactUs from './components/pages/ContactUs';

import Officers from './components/officers/Officers';

import LeagueAndFixturePage from './components/league/LeagueAndFixturePage';
import FriendlyFixturesWrapper from './components/fixtures/FriendlyFixturesWrapper';
import LeagueSelection from './components/league/LeagueSelection';
import friendlyFixtureGroups from "./data/friendlyFixtures_groups.json"

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import { Container } from 'react-bootstrap';
import AdminHome from './components/admin/AdminSelect';
import CreateNewLeague from './components/admin/newleague/CreateNewLeague';
import UpdateFixture from './components/admin/updateresult/UpdateFixture';


function App() {
  return (
    <Router>
      <div className="App">
        <TopNav fixtureGroups={friendlyFixtureGroups} />
        <Container>
          <Route exact path="/" component={Home} />
          <Route path="/officers"><Officers /></Route>
          <Route path="/leagueselection"> <LeagueSelection /></Route>
          <Route path="/leagueandfixtures"> <LeagueAndFixturePage /></Route>
          {friendlyFixtureGroups.map((fixtureGroup, index) => {
            if (fixtureGroup.active) {
              const path = "/friendlyfixtures/" + fixtureGroup.id
              return <Route path={path}><FriendlyFixturesWrapper fixtureGroupIdProps={fixtureGroup.id} fixtureGroupNameProps={fixtureGroup.name} /></Route>
            }
          })}
          <Route path="/admin"> <AdminHome /></Route>
          <Route path="/admin/createnewleague"> <CreateNewLeague /></Route>
          <Route path="/admin/updatefixture"> <UpdateFixture /></Route>
          <Route path="/contactus"> <ContactUs /></Route>
        </Container>
      </div>
    </Router>
  );
}


export default App;
