import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import "./tourSearch.css";
import axios from "axios";

class studentSearch extends Component {

  constructor(props) {
        super(props);
    }

  componentDidMount() {
    this.setState({email: this.props.location.data.email});
    console.log(this.state.email);
  }

  state = {
    email: null,
    uniDestination: null,
    visitSeason: null,
    amountTravellers: null,
    universityName: null,
    date: null,
    time: null,
    duration: null,
    spots: null,
    nearestAirport: null,
    nearestAirportName: null
  };

  searchTours(){
    axios
      .post("http://localhost:4000/searchTours",{
        uniDestination: this.state.uniDestinations,
        visitSeason: this.state.visitSeason,
        amountTravellers: this.state.amountTravellers
      })
      .then(res => {
        console.log(res.data);
      })
  }
  render() {
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
                    <option value="brock">Brock University</option>
                    <option value="carleton">Carleton University</option>
                    <option value="mcmaster">McMaster University</option>
                    <option value="ocad">OCAD University</option>
                    <option value="queens">Queen's University</option>
                    <option value="ryerson">Ryerson University</option>
                    <option value="guelph">University of Guelph</option>
                    <option value="ottawa">University of Ottawa</option>
                    <option value="toronto">University of Toronto</option>
                    <option value="waterloo">University of Waterloo</option>
                    <option value="windsor">University of Windsor</option>
                    <option value="western">
                      University of Western Ontario
                    </option>
                    <option value="laurier">Wilfrid Laurier University</option>
                    <option value="york">York University</option>
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
                    <option value="fall">Fall</option>
                    <option value="winter">Winter</option>
                    <option value="spring">Spring</option>
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
                <button className="button search_button">
                  search
                  <span />
                  <span />
                  <span />
                </button>
              </form>
            </div>
			<div id="features-wrapper">
                <div>
                  {/* Box */}
                  <section className="box feature cool">
                    <div className="inner">
                      <p><i className="fas fa-school" />  <b>University</b>: <span>{this.state.universityName}</span></p>
                      <p><i className="fas fa-cloud-sun" />  <b>Season</b>: <span>{this.state.season}</span></p>
                      <p><i className="fas fa-calendar-day" />  <b>Date</b>: <span>{this.state.date}</span></p>
                      <p><i className="fas fa-clock" />  <b>Time</b>: <span>{this.state.time}</span></p>
                      <p><i className="fas fa-hourglass" />  <b>Duration</b>: <span>{this.state.duration}</span></p>
                      <p><i className="fas fa-list-ol" />  <b>Available Spots</b>: <span>{this.state.spots}</span></p>
                      <p><i className="fas fa-plane" />  <b>Nearest Airport</b>: <span>{this.state.nearestAirport}</span> <span>{this.state.nearestAirportName}</span></p>
                    </div>
                  </section>
				</div>
			  </div>
			  
			  <div id="features-wrapper">
                <div>
                  {/* Box */}
                  <section className="box feature cool">
                    <div className="inner">
                      <p><i className="fas fa-school" />  <b>University</b>: <span>{this.state.universityName}</span></p>
                      <p><i className="fas fa-cloud-sun" />  <b>Season</b>: <span>{this.state.season}</span></p>
                      <p><i className="fas fa-calendar-day" />  <b>Date</b>: <span>{this.state.date}</span></p>
                      <p><i className="fas fa-clock" />  <b>Time</b>: <span>{this.state.time}</span></p>
                      <p><i className="fas fa-hourglass" />  <b>Duration</b>: <span>{this.state.duration}</span></p>
                      <p><i className="fas fa-list-ol" />  <b>Available Spots</b>: <span>{this.state.spots}</span></p>
                      <p><i className="fas fa-plane" />  <b>Nearest Airport</b>: <span>{this.state.nearestAirport}</span> <span>{this.state.nearestAirportName}</span></p>
                    </div>
                  </section>
				</div>
			  </div>
          </div>
        </div>
        );
      </div>
    );
  }
}

export default studentSearch;
