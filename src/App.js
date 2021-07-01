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
        <div>
          <TopNav />
          <Route exact path="/" component={Home} />
        </div>
        <div>
          <Route path="/leagueandfixtures"> <LeagueAndFixturePage /></Route>
          <Route path="/friendlyfixtures"><FriendlyFixturesWrapper /></Route>
          <Route path="/admin"> <AdminHome /></Route>
          <Route path="/admin/createnewleague"> <CreateNewLeague /></Route>
          <Route path="/admin/updatefixture"> <UpdateFixture /></Route>
        </div>
      </div>
    </Router>
  );
}


export default App;
