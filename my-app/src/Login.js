import React, {Component} from 'react';
import axios from 'axios';
import './login.css';
import './assets/css/main.css';

class login extends Component{
  state = {
    username: null,
    password: null
  };

  login = () => {
    axios.post('http:/localhost:4000/login',{
      username: this.state.username,
      password: this.state.password
    }).then((res)=>{
    });
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
			<button className="login" onClick={()=>this.login()}>Login</button>
		</div>

        <script src="https://sbhc.portalhc.com/219008/searchbox/468509"></script>
      </div>
    );
  }
}

export default login;
