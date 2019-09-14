import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import Login from './login.js'

class App extends Component{
  render(){
    return (
      <Router>
        <Route exact path = "/"component={Login}/>
      </Router>
    );
  }
}

export default App;
