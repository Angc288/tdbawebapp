import React, {useState} from 'react';
import  { BrowserRouter as Router, Route} from 'react-router-dom'

import TopNav from './components/topmenu/TopNav';
import Home from './components/pages/Home';
import Officers from './components/officers/Officers';

import LeagueAndFixturePage from './components/league/LeagueAndFixturePage';

import OutdoorFixtures from './components/fixtures/OutdoorFixtures';
import IndoorFixtures from './components/fixtures/IndoorFixtures';
import LadiesFixtures from './components/fixtures/LadiesFixtures';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import { Container } from 'react-bootstrap';


function App() {  
  return(
    <Router>
      <div className="App">
               <TopNav />
               <Container>
               <Route exact path="/" component={Home}/>
               <Route path="/tabaofficers"><Officers organisation={'TADBA'}/></Route> 
               <Route path="/talbaofficers"> <Officers organisation={'TALBA'}/></Route>
               <Route path="/tdbapremleague"> <LeagueAndFixturePage divisionId={'T_DBA_Premier_League2020'} leagueNameProp={'T&DBA Premier League'}/></Route>
               <Route path="/tdbadivoneleague"><LeagueAndFixturePage divisionId={'T_DBA_Division_One2020'} leagueNameProp={'T&DBA Division One'}/></Route>
               <Route path="/tdbadivtwoleague"><LeagueAndFixturePage divisionId={'T_DBA_Division_Two2020'} leagueNameProp={'T&DBA Division Two'}/></Route>
               <Route path="/talbadivoneleague"><LeagueAndFixturePage divisionId={'TALBA_Division_One2020'} leagueNameProp={'TALBA Division One'}/></Route>
               <Route path="/talbadivtwoleague"><LeagueAndFixturePage divisionId={'TALBA_Division_Two2020'} leagueNameProp={'TALBA Division Two'}/></Route>
               <Route path="/outdoorfixtures" component={OutdoorFixtures}/>
               <Route path="/indoorfixtures" component={IndoorFixtures}/>
               <Route path="/ladiesfixtures" component={LadiesFixtures}/>

               </Container>
     </div>
   </Router>
   );
}


export default App;
