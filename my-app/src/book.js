import React, {Component} from 'react';
import axios from 'axios';

class Book extends Component{

    optionState = null;

    state = {
        uniCity: null,
        date: null,
        departureCity: null,
        class: null,
        flightData: null
    }


    componentDidMount () {
        const script = document.createElement("script");
        script.type = 'text/javascript';
        script.src = "https://sbhc.portalhc.com/219008/searchbox/468509";
        script.async = true;

        this.instance.appendChild(script);
    }

    searchFlights(){
        axios.post('http:/localhost:4000/searchFlights',{
            departureCity: this.state.city,
            class: this.state.class,
            uniCity: this.state.uniCity,
            date: this.state.date
        }).then((res)=>{
            this.setState({flightData: res.data})
        });
    }
    
    render(){
        return (
            <div>

                <h2>Flights</h2>

                <input
                    type="text"
                    placeholder="Enter your departure city"
                    onChange={(e)=> this.setState.departureCity=e.target.value}
                    style={{ width: '200px' }}
                />
                <select onChange={(e)=>this.setState({class:e.target.value})}>
                    <option value="economy">Economy</option>
                    <option value="business">Business</option>
                    <option value="first">First Class</option>
                </select>
                <button onClick={()=>this.searchFlights()}>Search</button>
                <hr></hr>

                <h2>Hotels</h2>
                <div ref={el => (this.instance = el)} />

            </div>
        );
    }
}

export default Book;
