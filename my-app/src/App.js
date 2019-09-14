import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import Login from './login.js';
import Home from './home.js';
import Homepage from './homepage.js';
import Book from './book.js';

class App extends Component{
  render(){
    return (
      <Router>
        <Route exact path = "/" component = {Home}/>
        <Route exact path = "/login" component = {Login}/>
        <Route exact path = "/homepage" component = {Homepage}/>
        <Route exact path = "/book" component = {Book}/>
      </Router>
    );
  }
}

export default App;
