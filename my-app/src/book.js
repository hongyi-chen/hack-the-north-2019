import React, {Component} from 'react';
import axios from 'axios';

class Book extends Component{

  componentDidMount () {
    const script = document.createElement("script");
    script.type = 'text/javascript';
    script.src = "https://sbhc.portalhc.com/219008/searchbox/468509";
    script.async = true;

    this.instance.appendChild(script);
  }

  render(){
    return (
      <div ref={el => (this.instance = el)} />
    );
  }
}

export default Book;
