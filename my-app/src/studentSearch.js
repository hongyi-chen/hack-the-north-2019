import React, { Component } from "react";
import "./tourSearch.css";
import axios from "axios";
import Tour from './tour';

class studentSearch extends Component {

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
    universityName: null,
    date: null,
    time: null,
    duration: null,
    spots: null,
    nearestAirport: null,
    nearestAirportName: null,
    showTours: []
  };

  searchTours(){

    console.log(this.state);

    axios
      .post("http://localhost:4000/searchTours",{
        uniDestination: this.state.uniDestination,
        visitSeason: this.state.visitSeason,
        amountTravellers: this.state.amountTravellers
      })
      .then(res => {
        var tours = res.data;
        console.log(res.data);
        this.states.showTours = tours;
        //this.setState({showTours:tours});
        console.log(this.state.showTours);
      })
  }

  render() {

    var boxes = [];

    for(var js of this.state.showTours){
      console.log(js);
      boxes.push(<Tour data={js} />);
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
              {boxes}
            </div>
          </div>
        </div>
        );
      </div>
    );
  }
}

export default studentSearch;
