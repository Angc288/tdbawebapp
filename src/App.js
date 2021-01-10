import React, {Component} from 'react';
import  { BrowserRouter as Router, Route} from 'react-router-dom'

import TopNav from './components/topmenu/TopNav';
import Home from './components/pages/Home';
import TabaOfficers from './components/officers/TabaOfficers';
import TalbaOfficers from './components/officers/TalbaOfficers';
import TdbaPremFixtures from './components/league/TdbaPremFixtures';
import TalbaDivOneFixtures from './components/league/TalbaDivOneFixtures';
import TalbaDivTwoFixtures from './components/league/TalbaDivTwoFixtures';
import TdbaDivOneFixtures from './components/league/TdbaDivOneFixtures';
import TdbaDivTwoFixtures from './components/league/TdbaDivTwoFixtures';
import OutdoorFixtures from './components/fixtures/OutdoorFixtures';
import IndoorFixtures from './components/fixtures/IndoorFixtures';
import LadiesFixtures from './components/fixtures/LadiesFixtures';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import { Container } from 'react-bootstrap';

class App extends Component {
  render() {
      return(
        <Router>
          <div className="App">
                   <TopNav />
                   <Container>
                   <Route exact path="/" component={Home}/>
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
                   </Container>
         </div>
       </Router>
       );
   }
}

export default App;
