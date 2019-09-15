import React, {Component} from 'react';
import axios from 'axios';

class book extends Component{

    state = {
        uni: "brock university",
        date: 'oct 29 2019',
        departureCity: null,
        class: null,
        flightData: null,
        people: 5,
        nearestAirport: 'YYZ',
        originAirports: [],
    }

    constructor(props) {
        super(props);
        /*
        this.setState({uni: this.props.location.data.uni});
        this.setState({date: this.props.location.data.date});
        this.setState({people: this.props.location.data.people});
        this.setState({nearestAirport: this.props.location.data.nearestAirport});
        */
    }

    searchFlights(){

        axios.post('http://localhost:4000/searchFlights',{
            people: this.state.people,
            departureCity: this.state.city,
            class: this.state.class,
            uniAirport: this.state.nearestAirport,
            date: this.state.date
        }).then((res)=>{
            this.setState({flightData: res.data})
        });
    }
    
    loadAirports(val){
        console.log('loadairports');
        axios.post('http://localhost:4000/loadAirports',{
            departureCity: val
        }).then((res)=>{
            this.setState({originAirports: res.data.airports});
        });
        this.setState({city: val});
    }
    
    render(){

        var MakeItem = function(X) {
            return <option>{X}</option>;
        };

        var city = "";
        console.log(this.state.originAirports);
        return (
            <div>

                <h2>Flights</h2>

                <input
                    type="text"
                    placeholder="Enter your departure city"
                    onChange={(e)=> this.state.departureCity = e.target.value}
                    style={{ width: '200px' }}
                />

                <button onClick={()=>this.loadAirports(city)}>Confirm City</button>

                <select>{this.state.originAirports.map(MakeItem)}</select>

                <select onChange={(e)=>this.setState({class:e.target.value})}>
                    <option value="e">Economy</option>
                    <option value="p">Premium Economy</option>
                    <option value="b">Business</option>
                    <option value="f">First Class</option>
                </select>
                <button onClick={()=>this.searchFlights()}>Search</button>
                <hr></hr>

                <h2>Hotels</h2>

            </div>
        );
    }
}

export default book;
