import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import login from './login.js';
import home from './home.js';
import book from './book.js';
import registration from './registration.js';
import studentSearch from './studentSearch.js';
import brokerSearch from './brokerSearch.js';

class App extends Component{
  render(){
    return (
      <Router>
        <Route exact path = "/" component = {home}/>
        <Route exact path = "/login" component = {login}/>
        <Route exact path = "/book" component = {book}/>
        <Route exact path = "/registration" component = {registration}/>
        <Route exact path = "/studentSearch" component = {studentSearch}/>
        <Route exact path = "/brokerSearch" component = {brokerSearch}/>
      </Router>
    );
  }
}

export default App;
