import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

import TopNav from './components/topmenu/TopNav';
import Home from './components/pages/Home';
import ContactUs from './components/pages/ContactUs';

import Officers from './components/officers/Officers';

import LeagueAndFixturePage from './components/competition/league/LeagueAndFixturePage';
import CompetitionHome from './components/competition/CompetitionHome';
import FriendlyFixturesWrapper from './components/competition/friendly/FriendlyFixturesWrapper'
import friendlyFixtureGroups from "./data/friendlyFixtures_groups.json"


import './App.css';
import { Container } from 'react-bootstrap';
import AdminHome from './components/admin/AdminHomePage';
import CreateNewLeague from './components/admin/newleague/CreateNewLeague';
import UpdateFixture from './components/admin/updateresult/UpdateFixture';


function App() {
  return (
    <Router>
      <div className="App">
        <TopNav />
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/officers"><Officers /></Route>
          <Route path="/leagueselection"> <CompetitionHome /></Route>
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
      </div>
      </div>
    </Router>
  );
}


export default App;
