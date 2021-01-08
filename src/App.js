import React, {Component} from 'react';
import  { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import TopNav from './components/topmenu/TopNav';
import About from './components/pages/About';
import Home from './components/pages/Home';
import LeagueHome from './components/myleague/LeagueHome';
import TabaOfficers from './components/officers/TabaOfficers';
import TalbaOfficers from './components/officers/TalbaOfficers';
import TdbaPremFixtures from './components/myleague/TdbaPremFixtures';
import TalbaDivOneFixtures from './components/myleague/TalbaDivOneFixtures';
import TalbaDivTwoFixtures from './components/myleague/TalbaDivTwoFixtures';
import TdbaDivOneFixtures from './components/myleague/TdbaDivOneFixtures';
import TdbaDivTwoFixtures from './components/myleague/TdbaDivTwoFixtures';
import OutdoorFixtures from './components/fixtures/OutdoorFixtures';
import IndoorFixtures from './components/fixtures/IndoorFixtures';
import LadiesFixtures from './components/fixtures/LadiesFixtures';


import './App.css';

class App extends Component {
  render() {
      return(
        <Router>
          <div className="App">
            <div className="container">
                   <TopNav />
                   <Route exact path="/" component={Home}/>
                   <Route path="/about" component={About}/>
                   <Route path="/leagues" component={LeagueHome}/>
                   <Route path="/tabaofficers" component={TabaOfficers}/>
                   <Route path="/talbaofficers" component={TalbaOfficers}/>
                   <Route path="/tdbapremleague" component={TdbaPremFixtures}/>
                   <Route path="/tdbadivoneleague" component={TdbaDivOneFixtures}/>
                   <Route path="/tdbadivtwoleague" component={TdbaDivTwoFixtures}/>
                   <Route path="/talbadivoneleague" component={TalbaDivOneFixtures}/>
                   <Route path="/talbadivtwoleague" component={TalbaDivTwoFixtures}/>
                   <Route path="/outdoorfixtures" component={OutdoorFixtures}/>
                   <Route path="/indoorfixtures" component={IndoorFixtures}/>
                   <Route path="/ladiesfixtures" component={LadiesFixtures}/>
             </div>
         </div>
       </Router>
       );
   }
}

export default App;
