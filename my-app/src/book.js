import React, {Component} from 'react';
import axios from 'axios';

class book extends Component{

    state = {
        uni: "brock university",
        date: null,
        departureCity: null,
        class: null,
        flightData: null,
        people: null
    }

    constructor(props) {
        super(props);
        this.state.uni = this.props.location.data.uni;
        this.state.date = this.props.location.data.date;
        this.state.people = this.props.location.data.people;
    }

    componentDidMount () {

        const script = document.createElement("script");
        script.type = 'text/javascript';
        script.src = "https://sbhc.portalhc.com/219008/searchbox/468509";
        script.async = true;

        this.instance.appendChild(script);

    }

    getCity(university){
        var city = "";
        console.log(university);
        switch (university) {
            case "brock university":
                city = "St. Catherines";
                break;
            case "carleton university":
                city = "Ottawa";
                break;
            case "mcmaster university":
                city = "Hamilton";
                break;
            case "ocad university":
                city = "Toronto";
                break;
            case "queen's university":
                city = "Kingston";
                break;
            case "ryerson university":
                city = "Toronto";
                break;
            case "university of guelph":
                city = "Guelph";
                break;
            case "university of ottawa":
                city = "Ottawa";
                break;
            case "university of toronto":
                city = "Toronto";
                break;
            case "university of waterloo":
                city = "Waterloo";
                break;
            case "university of windsor":
                city = "Windsor";
                break;
            case "western university":
                city = "London";
                break;
            case "wilfred laurier university":
                city = "Waterloo";
                break;
            case "york university":
                city = "Toronto";
                break;
        }
        return city;
    }

    searchFlights(){


        var uniCity = this.getCity(this.state.uni);
        console.log(uniCity);

        axios.post('http:/localhost:4000/searchFlights',{
            people: this.state.people,
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

export default book;
