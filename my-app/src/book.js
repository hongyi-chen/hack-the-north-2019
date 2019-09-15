import React, { Component } from "react";
import axios from "axios";

class book extends Component {
  state = {
    uni: "brock university",
    date: "oct 29 2019",
    departureCity: null,
    class: null,
    flightData: null,
    people: 5,
    nearestAirport: "YYZ",
    originAirports: []
  };

    state = {
        uni: "brock university",
        date: '1/10/2019',
        departureCity: null,
        class: null,
        flightData: null,
        people: 5,
        nearestAirport: 'YYZ',
        originAirports: [],
        departureAirport: null
    }

    constructor(props) {
        super(props);
        this.setState({uni: this.props.location.data.uni});
        this.setState({date: this.props.location.data.date});
        this.setState({people: this.props.location.data.people});
        this.setState({nearestAirport: this.props.location.data.nearestAirport});
    }

    searchFlights(){
        //formate date
        var date = this.state.date;
        var newDate = "";
        if(date.indexOf("-")!=-1){//- exists
            var s1 = date.substring(0,date.indexOf("-"));
            date = date.substring(date.indexOf("-")+1);
            var s2 = date.substring(0,date.indexOf("-"));
            var s3 = date.substring(date.indexOf("-")+1);
            switch(s2){
                case "Jan":
                    s2 = "01";
                    break;
                case "Feb":
                    s2 = "02";
                    break;
                case "Mar":
                    s2 = "03";
                    break;
                case "Apr":
                    s2 = "04";
                    break;
                case "May":
                    s2 = "05";
                    break;
                case "Jun":
                    s2 = "06";
                    break;
                case "Jul":
                    s2 = "07";
                    break;
                case "Aug":
                    s2 = "08";
                    break;
                case "Sep":
                    s2 = "09";
                    break;
                case "Oct":
                    s2 = "10";
                    break;
                case "Nov":
                    s2 = "11";
                    break;
                case "Dec":
                    s2 = "12";
                    break;
            }
            newDate="20"+s3+"-"+s2+"-";
            if(s1.length==1){
                newDate+="0"+s1;
            }else{
                newDate+=s1;
            }
        }else{
            var s1 = date.substring(0,date.indexOf("/"));
            date = date.substring(date.indexOf("/")+1);
            var s2 = date.substring(0,date.indexOf("/"));
            var s3 = date.substring(date.indexOf("/")+1);


            newDate = s3+"-";
            if(s2.length==1) newDate+="0";
            newDate+=s2+"-";
            if(s1.length==1) newDate+="0";
            newDate+=s1;
        }

        var url = 'https://www.kayak.com/flights/'+this.state.departureAirport+"-"+this.state.nearestAirport+"/"+newDate;
        console.log(url);

        window.open(url)
    }

    loadAirports(){
        console.log('loadairports');
        axios.post('http://localhost:4000/loadAirports',{
            departureCity: this.state.departureCity
        }).then((res)=>{
            this.setState({originAirports: res.data.airports});
            this.setState({departureAirport: res.data.airports[0]});
        });

    }
    
    render(){

  searchFlights() {
    axios
      .post("http://localhost:4000/searchFlights", {
        people: this.state.people,
        departureCity: this.state.city,
        class: this.state.class,
        uniAirport: this.state.nearestAirport,
        date: this.state.date
      })
      .then(res => {
        this.setState({ flightData: res.data });
      });
  }

  loadAirports(val) {
    console.log("loadairports");
    axios
      .post("http://localhost:4000/loadAirports", {
        departureCity: val
      })
      .then(res => {
        this.setState({ originAirports: res.data.airports });
      });
    this.setState({ city: val });
  }

  render() {
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
          onChange={e => (this.state.departureCity = e.target.value)}
          style={{ width: "200px" }}
        />

        <select onChange={(e)=>this.setState({departureAirport:e.target.value})}>
            {this.state.originAirports.map(MakeItem)}
        </select>

        <select onChange={(e)=>this.setState({class:e.target.value})}>
            <option value="e">Economy</option>
            <option value="p">Premium Economy</option>
            <option value="b">Business</option>
            <option value="f">First Class</option>
        </select>

        <button onClick={()=>this.searchFlights()}>Search Flight</button>
        
        <hr></hr>

        <h2>Hotels</h2>
        <input
            type="text"
            placeholder="Enter the number of rooms"
            onChange={(e)=> this.state.departureCity = e.target.value}
            style={{ width: '200px' }}
        />

        <button onClick={()=>this.searchFlights()}>Search Hotels</button>
        <button onClick={() => this.loadAirports(city)}>Confirm City</button>

        <select>{this.state.originAirports.map(MakeItem)}</select>

        <select onChange={e => this.setState({ class: e.target.value })}>
          <option value="e">Economy</option>
          <option value="p">Premium Economy</option>
          <option value="b">Business</option>
          <option value="f">First Class</option>
        </select>
        <button onClick={() => this.searchFlights()}>Search</button>
        <hr></hr>

        <h2>Hotels</h2>
      </div>
    );
  }
}

export default book;
