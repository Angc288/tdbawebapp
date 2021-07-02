import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/pages/Home';
import LeagueAndFixturePage from './components/competition/league/LeagueAndFixturePage';
import FriendlyFixturesWrapper from './components/competition/friendly/FriendlyFixturesWrapper'
import './App.css';
import AdminHome from './components/admin/AdminHomePage';
import CreateNewLeague from './components/admin/newleague/CreateNewLeague';
import UpdateFixture from './components/admin/updateresult/UpdateFixture';
import Footer from './components/pages/Footer';
import TermsOfUse from './components/pages/TermsOfUse';
import PrivacyPolicy from './components/pages/PrivacyPolicy';
import TopNav from './components/topmenu/TopNav';


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <StandardNavBar exact path="/" component={<Home />} />
          <EmptyNavBar exact path="/leagueandfixtures" component={<LeagueAndFixturePage />} />
          <EmptyNavBar exact path="/friendlyfixtures" component={<FriendlyFixturesWrapper />} />
          <EmptyNavBar exact path="/admin/createnewleague" component={<CreateNewLeague />} />
          <EmptyNavBar exact path="/admin/updatefixture" component={<UpdateFixture />} />
          <EmptyNavBar exact path="/admin" component={<AdminHome />} />
          <EmptyNavBar exact path="/termsofuse" component={<TermsOfUse />} />
          <EmptyNavBar exact path="/privacypolicy" component={<PrivacyPolicy />} />
          <Route path="*"><Redirect to="/"></Redirect> </Route>


          {/* <Route exact path="/"> <Home /> </Route> */}
          {/* <Route path="/leagueandfixtures"> <LeagueAndFixturePage /></Route>
          <Route path="/friendlyfixtures"><FriendlyFixturesWrapper /></Route>
          <Route path="/admin/createnewleague"> <CreateNewLeague /></Route>
          <Route path="/admin/updatefixture"> <UpdateFixture /></Route>
          <Route path="/admin"> <AdminHome /></Route>
          <Route path="/termsofuse"> <TermsOfUse /></Route>
          <Route path="/privacypolicy"> <PrivacyPolicy /></Route>
          <Route path="*"><div>404</div></Route> */}
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}



const StandardNavBar = ({ exact, path, component, ...rest }) => {
  return (
    <>
      <TopNav place={"a"} />
      <Route exact={exact} path={path}>{component} </Route>
    </>

  )
}

const EmptyNavBar = ({ exact, path, component, ...rest }) => {
  return (
    <>
      <TopNav place={"b"} />
      <Route exact={exact} path={path}>{component} </Route>
    </>

  )

}



export default App;

