import React, {Component} from 'react';
import axios from 'axios';

class Login extends Component{
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

  componentDidMount() {
    var aScript = document.createElement('script');
    aScript.type = 'text/javascript';
    aScript.src = "https://sbhc.portalhc.com/219008/searchbox/468509";

    document.head.appendChild(aScript);
    aScript.onload = function() {
        document.getElementById("box").InnerHTML = hello;
    };
}

  render(){
    return (
      <div>
        <input
            type="text"
            placeholder="Username"
            onChange={(e)=> this.setState.username=e.target.value}
            style={{ width: '200px' }}
          />
          <input
            type="text"
            placeholder="Password"
            onChange={(e)=> this.setState.password=e.target.value}
            style={{ width: '200px' }}
          />
          <button onClick={()=>this.login()}>Register</button>

          <div id="box"></div>
      </div>
    );
  }
}

export default Login;