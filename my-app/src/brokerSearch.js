import React, { Component } from "react";
import {BrowserRoouter as Router, Route, Link, Redirect} from "react-router-dom";
import "./tourSearch.css";
import "./login.css";
import firebase from "firebase";
import axios from "axios";  
import FileUploader from "react-firebase-file-uploader";
import Tour from "./tour";
//import Papa from 'papaparse';

const firebaseConfig = {
  apiKey: "AIzaSyC08FLEjf003pV-j9t9pYHs2eu_MahFqfs",
  authDomain: "hack-the-north2019.firebaseapp.com",
  databaseURL: "https://hack-the-north2019.firebaseio.com",
  projectId: "hack-the-north2019",
  storageBucket: "hack-the-north2019.appspot.com",
  messagingSenderId: "683328898630",
  appId: "1:683328898630:web:42481d6cc2ff9ffd722c47"
};
firebase.initializeApp(firebaseConfig);

class DataController extends React.Component{
  constructor(props) {
    super(props);
  }

  componentWillMount() {
      this.getCsvData();
  }

	state = {
		universityName: null,
		date: null,
		time: null,
		duration: null,
		spots: null,
		nearestAirport: null,
		nearestAirportName: null,
	}

  fetchCsv() {
      return fetch('gs://hack-the-north2019.appspot.com/csv/Book1.csv').then(function (response) {
          let reader = response.body.getReader();
          let decoder = new TextDecoder('utf-8');
          console.log(5);
          return reader.read().then(function (result) {
              return decoder.decode(result.value);
          });
      });
  }

  getData(result) {
      this.setState({data: result.data});
      console.log("data",this.state.data);
  }
/*
  async getCsvData() {
      let csvData = await this.fetchCsv();

      Papa.parse(csvData, {
          complete: this.getData
      });
  }
*/
  render() {
    return (
        <section className="data-controller">
            ...
        </section>
    );
  }
} 


class brokerSearch extends Component {

  constructor(props) {
        super(props);
    }

  componentDidMount() {
    if(!this.props.location.data){
      console.log('didnt get email');
       this.setState({email: 'erica.wang.moyang@gmail.com'});
    }
    else this.setState({email: this.props.location.data.email});
  }

  state = {
    uniDestination: null,
    visitSeason: null,
    amountTravellers: null,
    show: false,
    toBook: false,
    showTours: [{
        "ID": 37,
        "UniversityName": "Ryerson University",
        "Season": "Fall",
        "Date": "16-Oct-19",
        "Time": "9:00",
        "Duration": 1.5,
        "Size": 30,
        "AvailableSpots": 30,
        "NearestAirport": "YYZ",
        "AirportCity": "Toronto"
    },
    {
        "ID": 38,
        "UniversityName": "Ryerson University",
        "Season": "Fall",
        "Date": "16-Oct-19",
        "Time": "11:00",
        "Duration": 1.5,
        "Size": 30,
        "AvailableSpots": 30,
        "NearestAirport": "YYZ",
        "AirportCity": "Toronto"
    },
    {
        "ID": 39,
        "UniversityName": "Ryerson University",
        "Season": "Fall",
        "Date": "16-Oct-19",
        "Time": "13:00",
        "Duration": 1.5,
        "Size": 30,
        "AvailableSpots": 30,
        "NearestAirport": "YYZ",
        "AirportCity": "Toronto"
    },
    {
        "ID": 40,
        "UniversityName": "Ryerson University",
        "Season": "Fall",
        "Date": "17-Oct-19",
        "Time": "9:00",
        "Duration": 1.5,
        "Size": 30,
        "AvailableSpots": 30,
        "NearestAirport": "YYZ",
        "AirportCity": "Toronto"
    },
    {
        "ID": 41,
        "UniversityName": "Ryerson University",
        "Season": "Fall",
        "Date": "17-Oct-19",
        "Time": "11:00",
        "Duration": 1.5,
        "Size": 30,
        "AvailableSpots": 30,
        "NearestAirport": "YYZ",
        "AirportCity": "Toronto"
    },
    {
        "ID": 42,
        "UniversityName": "Ryerson University",
        "Season": "Fall",
        "Date": "17-Oct-19",
        "Time": "13:00",
        "Duration": 1.5,
        "Size": 30,
        "AvailableSpots": 30,
        "NearestAirport": "YYZ",
        "AirportCity": "Toronto"
    },
    {
        "ID": 43,
        "UniversityName": "Ryerson University",
        "Season": "Fall",
        "Date": "24-Oct-19",
        "Time": "9:00",
        "Duration": 1.5,
        "Size": 30,
        "AvailableSpots": 30,
        "NearestAirport": "YYZ",
        "AirportCity": "Toronto"
    },
    {
        "ID": 44,
        "UniversityName": "Ryerson University",
        "Season": "Fall",
        "Date": "24-Oct-19",
        "Time": "11:00",
        "Duration": 1.5,
        "Size": 30,
        "AvailableSpots": 30,
        "NearestAirport": "YYZ",
        "AirportCity": "Toronto"
    },
    {
        "ID": 45,
        "UniversityName": "Ryerson University",
        "Season": "Fall",
        "Date": "24-Oct-19",
        "Time": "13:00",
        "Duration": 1.5,
        "Size": 30,
        "AvailableSpots": 30,
        "NearestAirport": "YYZ",
        "AirportCity": "Toronto"
    }]
  };

  searchTours(){
    console.log(this.state);
    axios
      .post("http://localhost:4000/searchTours",{
        uniDestination: this.state.uniDestinations,
        visitSeason: this.state.visitSeason,
        amountTravellers: this.state.amountTravellers
      })
      .then(res => {
        console.log(res.data);
      })

    this.setState({show:true});
  }

  book(){

  }

  render() {
    if(this.state.toBook){
      return <Redirect to={{pathname: "/book", data: {email:this.state.email} }} />
    }
    var boxes = [];
    if(this.state.show){
      console.log(boxes);

      for(var js of this.state.showTours){
        console.log(js);
        boxes.push(<Tour data={js} />);
      }
    }

    return (
      <div>
        <header id="header" className="container">
          {/* Logo */}
          <div id="logo">
          <h1><a href="/">tourhub</a></h1>
            <span>powered by Accenture.</span>
          </div>
        </header>
        <div className="search">
          {/* Search Contents */}
          <div className="container fill_height">
            {/* Search Panel */}
            <div className="search_panel active">
              <form
                action="#"
                id="search_form_1"
                className="search_panel_content d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-lg-between justify-content-start"
              >
                <div className="search_item">
                  <div>
                    <strong>University Destination</strong>
                  </div>
                  <select
                    onChange={e => this.setState({ uniDestination: e.target.value })}
                    type="text"
                    className="destination search_input"
                    required="required"
                  >
                    <option>What is your university destination?</option>
                    <option value="Brock University">Brock University</option>
                    <option value="Carleton University">Carleton University</option>
                    <option value="McMaster University">McMaster University</option>
                    <option value="OCAD University">OCAD University</option>
                    <option value="Queen's University">Queen's University</option>
                    <option value="Ryerson University">Ryerson University</option>
                    <option value="University of Guelph">University of Guelph</option>
                    <option value="University of Ottawa">University of Ottawa</option>
                    <option value="University of Toronto">University of Toronto</option>
                    <option value="University of Waterloo">University of Waterloo</option>
                    <option value="University of Windsor">University of Windsor</option>
                    <option value="University of Western Ontario">
                      University of Western Ontario
                    </option>
                    <option value="Wilfrid Laurier University">Wilfrid Laurier University</option>
                    <option value="York University">York University</option>
                  </select>
                </div>

                <div className="search_item">
                  <div>
                    <strong>Season of Visit</strong>
                  </div>
                  <select
                    onChange={e => this.setState({ visitSeason: e.target.value })}
                    type="text"
                    className="season search_input"
                    required="required"
                  >
                    <option>What season would you like to visit?</option>
                    <option value="Fall">Fall</option>
                    <option value="Winter">Winter</option>
                    <option value="Spring">Spring</option>
                  </select>
                </div>

                <div className="search_item">
                  <div>
                    <strong>Amount of travellers</strong>
                  </div>
                  <select
                    onChange={e => this.setState({ amountTravellers: e.target.value })}
                    name="travellers"
                    id="travellers_1"
                    className="amountTravellers search_input"
                    required="required"
                  >
                    <option>How many travellers are there?</option>
                    <option value="1">01</option>
                    <option value="2">02</option>
                    <option value="3">03</option>
                    <option value="4">04</option>
                    <option value="5">05</option>
                    <option value="6">06</option>
                    <option value="7">07</option>
                    <option value="8">08</option>
                    <option value="9">09</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                    <option value="25">25</option>
                  </select>
                </div>
                <button onClick={()=> this.searchTours()}>
                  Search
                  <span />
                  <span />
                  <span />
                </button>
              </form>

              <div className="search_item_cool">
                <form>
                <div className="search_item_cool2">
                  <strong>Upload .CSV (student info):</strong>
                </div>
                <FileUploader
                  storageRef={firebase.storage().ref("csv")}
                  onUploadStart={this.handleUploadStart}
                  onUploadError={this.handleUploadError}
                  onUploadSuccess={this.handleUploadSuccess}
                  onProgress={this.handleProgress}
                />
              </form>
            </div>
                <a onClick={()=> this.setState({toBook: true})}>
              {boxes}
              </a>
            </div>
          </div>
        </div>
        );
      </div>
    );
  }
}
export default brokerSearch;
