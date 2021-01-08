import  { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import {Link} from 'react-router-dom'
import Home from '../pages/Home';


function LeagueHome(){
  return ( 
  				<div>
                   <Link to="/tdbapremleague">T&DBA Premier League   ||||| </Link>
                   <Link to="/tdbadivoneleague">T&DBA Divison One   ||||| </Link>
                   <Link to="/tdbadivtwoleague">T&DBA Divison Two   ||||| </Link>
               	   <Link to="/talbadivoneleague">TALBA Divison One   ||||| </Link>
                   <Link to="/talbadivtwoleague">TALBA Divison Two   ||||| </Link>
             </div>
    );
}


export default LeagueHome;