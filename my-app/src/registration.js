import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import axios from 'axios';
import './login.css';
import './assets/css/main.css';
import firebase from 'firebase';

class registration extends Component{

	constructor(props) {
        super(props);
    }

  componentDidMount() {
    if(!this.props.location.data){
      console.log('didnt get status');
       this.setState({personStatus: 'student'});
    }
    else this.setState({personStatus: this.props.location.data.personStatus});
  }

  state = {
    email: null,
	password: null,
	firstName: null,
	lastName: null,
	personStatus: null,
	toBroker: false,
	toStudent: false
  };

  registration = () => {
  	console.log('registration');
	const userSend = this.state.email;
    const userPass = this.state.password;
    console.log(userSend, userPass);
    const auth = firebase.auth();
    const promise = auth.createUserWithEmailAndPassword(userSend, userPass);
    promise.catch(e => console.log(e.message));

    if(this.state.personStatus=="broker"){
    	this.setState({toBroker: true});
    }else{
    	this.setState({toStudent: true});
    }
  }

  render(){

  	if (this.state.toBroker === true) {
  		return <Redirect to={{pathname: "/brokerSearch", data: {email:this.state.email} }} />
	}
	if (this.state.toStudent === true) {
  		return <Redirect to={{pathname: "/studentSearch", data: {email:this.state.email} }} />
	}

    return (
      <div>
		<div id="log">
		<header id="header" className="container">
            {/* Logo */}
            <div id="logo">
			<h1><a href="/">tourhub</a></h1>
              <span>powered by Accenture.</span>
            </div>
          </header>
			<input className="login" 
				type="text"
				placeholder="First Name"
				onChange={(e)=> this.setState({firstName: e.target.value})}
				style={{ width: '200px' }}
			  />
			  <input className="login"
				type="text"
				placeholder="Last Name"
				onChange={(e)=> this.setState({lastName: e.target.value})}
				style={{ width: '200px' }}
			  />
			<input className="login"
				type="text"
				placeholder="Email"
				onChange={(e)=> this.setState({email: e.target.value})}
				style={{ width: '200px' }}
			  />
			<input className="login"
				type="text"
				placeholder="Password"
				onChange={(e)=> this.setState({password: e.target.value})}
				style={{ width: '200px' }}
			/>
			<button className="login" onClick={()=>this.registration()}>Register</button>
		</div>
        <script src="https://sbhc.portalhc.com/219008/searchbox/468509"></script>
      </div>
    );
  }
}

export default registration;
