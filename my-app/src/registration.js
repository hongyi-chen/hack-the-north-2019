import React, {Component} from 'react';
import axios from 'axios';
import './login.css';
import './assets/css/main.css';
import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyC08FLEjf003pV-j9t9pYHs2eu_MahFqfs",
	authDomain: "hack-the-north2019.firebaseapp.com",
	databaseURL: "https://hack-the-north2019.firebaseio.com",
	projectId: "hack-the-north2019",
	storageBucket: "hack-the-north2019.appspot.com",
	messagingSenderId: "683328898630",
	appId: "1:683328898630:web:42481d6cc2ff9ffd722c47"
  };


class registration extends Component{
  state = {
    username: null,
	password: null,
	firstName: null,
	lastName: null,
	email: null
  };

  registration = () => {
	console.log(this.state.email);
	console.log(1);
    const userSend =  this.state.email;
	const passSend = this.state.password;
	const auth = firebase.auth();
	const promise = auth.createUserWithEmailAndPassword(userSend, passSend);
	
	promise.catch(e => console.log(e.message));
  }

  render(){
    return (
      <div>
		<div id="log">
		<header id="header" className="container">
            {/* Logo */}
            <div id="logo">
              <h1>tourhub</h1>
              <span>powered by Accenture.</span>
            </div>
          </header>
			<input className="login"
				type="text"
				placeholder="First Name"
				onChange={(e)=> this.setState.firstName=e.target.value}
				style={{ width: '200px' }}
			  />
			  <input className="login"
				type="text"
				placeholder="Last Name"
				onChange={(e)=> this.setState.lastName=e.target.value}
				style={{ width: '200px' }}
			  />
			<input className="login"
				type="text"
				placeholder="Email"
				onChange={(e)=> this.setState.email=e.target.value}
				style={{ width: '200px' }}
			  />
			<input className="login"
				type="text"
				placeholder="Username"
				onChange={(e)=> this.setState.username=e.target.value}
				style={{ width: '200px' }}
			  />
			<input className="login"
				type="text"
				placeholder="Password"
				onChange={(e)=> this.setState.password=e.target.value}
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
