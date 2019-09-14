import React, {Component} from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import home from './home.js'
import login from './login.js'

class App extends Component{
  render(){
    return (
      <Router>
        <Route exact path = "/" component = {home}/>
        <Route exact path = "/login" component = {login}/>
      </Router>
    );
  }
}

export default App;
