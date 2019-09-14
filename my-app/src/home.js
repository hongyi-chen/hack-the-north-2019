import React, { Component } from 'react';
import './assets/css/main.css';
import './assets/css/main.css';
import './assets/css/images/bg01.png';

class home extends Component {
  render() {
    return (
      <div id="page-wrapper">
        {/* Header */}
        <div id="header-wrapper">
          <header id="header" className="container">
            {/* Logo */}
            <div id="logo">
              <h1><a href="index.html">Project Name</a></h1>
              <span>powered by Accenture</span>
            </div>
            {/* Nav */}
            <nav id="nav">
              <ul>
                <li className="current"><a>Log In</a></li>
              </ul>
            </nav>
          </header>
        </div>
        {/* Banner */}
        <div id="banner-wrapper">
          <div id="banner" className="box container">
            <div className="row">
              <div className="col-7 col-12-medium">
                <h2>Hi. Welcome to Project Name.</h2>
                <p>The best resource to book your Canadian university tour</p>
              </div>
              <div className="col-5 col-12-medium">
                <ul>
                  <li><a className="button large icon solid fa-user">Student</a></li>
                  <li><a className="button alt large icon solid fa-users">Broker</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Scripts */}
        {/* The core Firebase JS SDK is always required and must be listed first */}
        {/* TODO: Add SDKs for Firebase products that you want to use
        https://firebase.google.com/docs/web/setup#config-web-app */}
      </div>
    );
  }
}

export default home;