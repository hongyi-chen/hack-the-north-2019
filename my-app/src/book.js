import React, { Component } from "react";
import axios from "axios";
import "./tourSearch.css";

class book extends Component {

    state = {
        uni: "Ryerson University",
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
        /*
        this.setState({uni: this.props.location.data.uni});
        this.setState({date: this.props.location.data.date});
        this.setState({people: this.props.location.data.people});
        this.setState({nearestAirport: this.props.location.data.nearestAirport});
        */
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

        var url = 'https://www.kayak.com/flights/'+"LAX"+"-YYZ"+"/"+newDate;
        console.log(url);

        window.open(url)
    }

    searchHotels(){
        var url = 'https://www.kayak.com/hotels/Toronto,Canada-16078/2019-10-20/2019-10-22'

        window.open(url);
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
        <h2 className="bookLabel">Flights</h2>

        <input className="bookLabel"
          type="text"
          placeholder="Enter your departure city"
          onChange={e => (this.state.departureCity = e.target.value)}
          style={{ width: "200px" }}
        />
		<br />
        <select onChange={(e)=>this.setState({departureAirport:e.target.value})}>
            {this.state.originAirports.map(MakeItem)}
        </select>

        <br />

        <select className="bookLabel" onChange={(e)=>this.setState({class:e.target.value})}>
            <option value="e"> Economy</option>
            <option value="p"> Premium Economy</option>
            <option value="b"> Business</option>
            <option value="f"> First Class</option>
        </select>

        <br />
        <button className="bookLabel" onClick={()=>this.searchFlights()}>Search Flight</button>

        <h2 className="bookLabel">Hotels</h2>
        <input class="bookLabel"
            type="text"
            placeholder="Enter the number of rooms"
            onChange={(e)=> this.state.departureCity = e.target.value}
            style={{ width: '200px' }}
        />

        <br />
        <button className="bookLabel" onClick={()=>this.searchHotels()}>Search Hotels</button>
      </div>
    );
  }
}

export default book;
