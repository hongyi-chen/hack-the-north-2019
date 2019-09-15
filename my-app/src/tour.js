import React, { Component } from "react";

class Tour extends Component{

	constructor(props){
		super(props);
	}

	render(){
		return (
			<div id="features-wrapper">
                <div>
                  {/* Box */}
                  <section className="box feature cool">
                    <div className="inner">
                      <p><i className="fas fa-school" />  <b>University</b>: <span>{this.props.data.UniversityName}</span></p>
                      <p><i className="fas fa-cloud-sun" />  <b>Season</b>: <span>{this.props.data.Season}</span></p>
                      <p><i className="fas fa-calendar-day" />  <b>Date</b>: <span>{this.props.data.Date}</span></p>
                      <p><i className="fas fa-clock" />  <b>Time</b>: <span>{this.props.data.Time}</span></p>
                      <p><i className="fas fa-hourglass" />  <b>Duration</b>: <span>{this.props.data.Duration}</span></p>
                      <p><i className="fas fa-list-ol" />  <b>Available Spots</b>: <span>{this.props.data.AvailableSpots}</span></p>
                      <p><i className="fas fa-plane" />  <b>Nearest Airport</b>: <span>{this.props.data.nearestAirport}</span></p>
                      <p><i className="fas fa-pl" />  <b>Airport City</b>: <span>{this.props.data.AirportCity}</span></p>
                    </div>
                  </section>
				</div>
			  </div>

		)
	}
}

export default Tour;