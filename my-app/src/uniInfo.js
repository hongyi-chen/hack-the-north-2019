import React, { Component } from 'react';
import {BrowserRoouter as Router, Route, Link, Redirect} from "react-router-dom";

import './assets/css/main.css';

class uniInfo extends Component {

  render() {
	  
    return (
    
		var NewComponent = React.createClass({
  render: function() {
    return (
      <div>
        <div style={{display: 'block', textAlign: 'center', marginTop: '20px', fontSize: '2.0em'}}>
          <h1><b>Ontario Universities</b></h1>
        </div>
        <div id="features-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-4 col-12-medium">
                {/* Box */}
                <section className="box feature">
                  <a href="https://carleton.ca/" target="_blank" className="image featured"><img src="assets/uniPics/cu.jpg" alt="" /></a>
                  <div className="inner">
                    <header>
                      <h2>Carleton University<br /><i className="fa fa-map-marker" />Ottawa</h2>
                      <p>Founded in 1942, this institute is well-known for its undergraduate and graduate journalism programs.</p>
                    </header>
                    <p>Learn about Canadian culture at the <i>ByWard Market</i> by exploring artisan foods and designer clothes. Enjoy over 100 acres of activities including a giant wave pool, toddler area, and fast waterslides at the <i>Calypso Theme Waterpark.</i></p>
                  </div>
                </section>
              </div>
              <div className="col-4 col-12-medium">
                {/* Box */}
                <section className="box feature">
                  <a href="https://www.mcmaster.ca/" target="_blank" className="image featured"><img src="assets/uniPics/mu.jpg" alt="" /></a>
                  <div className="inner">
                    <header>
                      <h2>McMaster University<br /><i className="fa fa-map-marker" />Hamilton</h2>
                      <p>Founded in 1887, this university was named after William McMaster, a prominent Canadian senator, and banker.</p>
                    </header>
                    <p>Among the many natural gardens, the city is home to the <i>Royal Botanical Gardens</i> blooming from May to October. The infamous <i>African Lion Safari</i> is a family-owned safari park featuring many interesting animals.</p>
                  </div>
                </section>
              </div>
              <div className="col-4 col-12-medium">
                {/* Box */}
                <section className="box feature">
                  <a href="https://www.ocadu.ca/" target="_blank" className="image featured"><img src="assets/uniPics/ou.jpg" alt="" /></a>
                  <div className="inner">
                    <header>
                      <h2>Ocad University<br /><i className="fa fa-map-marker" />Toronto</h2>
                      <p>Founded in 1876, this university is dedicated to art and design education.</p>
                    </header>
                    <p>Next door, tours are encouraged to visit the <i>Art Gallery of Ontario</i> with a collection of more than 90000 works of art. Downtown Toronto is nearby and readily accessible with all the public transportation available in this big city.</p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
        <div id="features-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-4 col-12-medium">
                {/* Box */}
                <section className="box feature">
                  <a href="https://www.queensu.ca/" target="_blank" className="image featured"><img src="assets/uniPics/qu.jpg" alt="" /></a>
                  <div className="inner">
                    <header>
                      <h2>Queen’s University<br /><i className="fa fa-map-marker" />Kingston</h2>
                      <p>Founded in 1841, this university is a public research university formed via a royal charter issued by Queen Victoria.</p>
                    </header>
                    <p><i>The Thousand Islands</i> are a group of more than 1,800 islands nearby, essential to visit during your tour. One of the many historical sites nearby is the <i>Ford Henry National Historic Site</i>, restored in the 19-th century with guided tours.</p>
                  </div>
                </section>
              </div>
              <div className="col-4 col-12-medium">
                {/* Box */}
                <section className="box feature">
                  <a href="https://www.ryerson.ca/" target="_blank" className="image featured"><img src="assets/uniPics/ru.jpg" alt="" /></a>
                  <div className="inner">
                    <header>
                      <h2>Ryerson University<br /><i className="fa fa-map-marker" />Toronto</h2>
                      <p>Founded in 1948, this institute is situated on historic St James Square.</p>
                    </header>
                    <p>Be sure to enjoy a premier shopping mall experience at <i>CF Toronto Eaton Centre</i>. Take a walk to <i>Old Toronto</i> to immerse yourself in the exquisite Canadian culture and history.</p>
                  </div>
                </section>
              </div>
              <div className="col-4 col-12-medium">
                {/* Box */}
                <section className="box feature">
                  <a href="https://www.uoguelph.ca/" target="_blank" className="image featured"><img src="assets/uniPics/ug.jpg" alt="" /></a>
                  <div className="inner">
                    <header>
                      <h2>University of Guelph<br /><i className="fa fa-map-marker" />Guelph</h2>
                      <p>Founded in 1964, this institute is well-known for its strengths in areas such as agri-food and veterinary medicine.</p>
                    </header>
                    <p>Enjoy a nature stroll on campus in the <i>University of Guelph Arboretum</i>. Visit <i>Guelph Lake</i> and learn about the competitive and recreational rowing culture.</p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
        <div id="features-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-4 col-12-medium">
                {/* Box */}
                <section className="box feature">
                  <a href="https://www.uottawa.ca/en" target="_blank" className="image featured"><img src="assets/uniPics/uo.jpg" alt="" /></a>
                  <div className="inner">
                    <header>
                      <h2>University of Ottawa<br /><i className="fa fa-map-marker" />Ottawa</h2>
                      <p>Founded in 1848, this university is the largest bilingual university in North America.</p>
                    </header>
                    <p>With artworks, lush grounds and tours, be sure to visit <i>Parliament Hill</i>, the home of the Canadian federal government. Many Canadian works are featured in the <i>National Gallery of Canada</i>, one of many nearby museums.</p>
                  </div>
                </section>
              </div>
              <div className="col-4 col-12-medium">
                {/* Box */}
                <section className="box feature">
                  <a href="https://www.utoronto.ca/" target="_blank" className="image featured"><img src="assets/uniPics/ut.jpg" alt="" /></a>
                  <div className="inner">
                    <header>
                      <h2>University of Toronto<br /><i className="fa fa-map-marker" />Toronto</h2>
                      <p>Founded in 1827, this university has three main campuses and is one of Ontario’s oldest universities.</p>
                    </header>
                    <p>Check out the <i>CN Tower</i>, Toronto’s iconic skyscraper where you can enjoy dinner at the top and do an <i>EdgeWalk</i> around its perimeter. Walk a few blocks down to <i>Chinatown</i>, and experience the rich culture that resides from around the world housed in Canada.</p>
                  </div>
                </section>
              </div>
              <div className="col-4 col-12-medium">
                {/* Box */}
                <section className="box feature">
                  <a href="https://uwaterloo.ca/" target="_blank" className="image featured"><img src="assets/uniPics/uw.jpg" alt="" /></a>
                  <div className="inner">
                    <header>
                      <h2>University of Waterloo<br /><i className="fa fa-map-marker" />Waterloo</h2>
                      <p>Founded in 1957, this university is most well-known for its cooperative education (co-op) programs.</p>
                    </header>
                    <p>Explore local culture at the <i>St.Jacob’s Farmer’s Marker &amp; Flea Market</i>, bustling year-round that will get you involved with the local community. Featuring rotating and permanent interactive art, science &amp; technology exhibits, visit Waterloo’s <i>THEMUSEUM</i>.</p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
        <div id="features-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-4 col-12-medium">
                {/* Box */}
                <section className="box feature">
                  <a href="https://brocku.ca/" target="_blank" className="image featured"><img src="assets/uniPics/bu.jpg" alt="" /></a>
                  <div className="inner">
                    <header>
                      <h2>Brock University<br /><i className="fa fa-map-marker" /> St. Catherine's</h2>
                      <p>Founded in 1964, this university is named after Major-General Sir Isaac Brock who passed away in the War of 1812.</p>
                    </header>
                    <p>Be sure to visit the <i>Welland Canal</i> in the city connecting Lake Ontario and Lake Erie. Nearby is the <i>Niagara Falls</i>, which have the highest flow rate of any waterfall on earth.</p>
                  </div>
                </section>
              </div>
              <div className="col-4 col-12-medium">
                {/* Box */}
                <section className="box feature">
                  <a href="http://www.uwindsor.ca/" target="_blank" className="image featured"><img src="assets/uniPics/uofw.jpg" alt="" /></a>
                  <div className="inner">
                    <header>
                      <h2>University of Windsor<br /><i className="fa fa-map-marker" />Windsor</h2>
                      <p>Founded in 1963, as a border-city, Windsor will expose tourists to a large variety of attractions.</p>
                    </header>
                    <p>Commute across the <i>Ambassador Bridge</i>, a long span linking the U.S. and Canada. For the nature lovers, <i>Jackson Park</i> is sprawling with over 10,000 plants.</p>
                  </div>
                </section>
              </div>
              <div className="col-4 col-12-medium">
                {/* Box */}
                <section className="box feature">
                  <a href="https://www.uwo.ca/" target="_blank" className="image featured"><img src="assets/uniPics/wu.jpg" alt="" /></a>
                  <div className="inner">
                    <header>
                      <h2>Western University<br /><i className="fa fa-map-marker" />London</h2>
                      <p>Founded in 1878, this institute was founded by Bishop Isaac Hellmuth.</p>
                    </header>
                    <p>Visit <i>Boler Mountain</i>, in the winter-time for skiing, adventure, mountain bikes and much more. Explore the different corners of the city by taking part in some of the many escape rooms such as the <i>Mystery Escape Rooms</i> to leave your mark in the city.</p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
        <div id="features-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-4 col-12-medium">
                {/* Box */}
                <section className="box feature">
                  <a href="https://www.wlu.ca/" target="_blank" className="image featured"><img src="assets/uniPics/wlu.jpg" alt="" /></a>
                  <div className="inner">
                    <header>
                      <h2>Wilfred Laurier University<br /><i className="fa fa-map-marker" />Waterloo</h2>
                      <p>Founded in 1911, this institute is known for its tight-knit community.</p>
                    </header>
                    <p>This student-filled city is brimming with places to eat for all the foodies. Enjoy the nature in this relatively small city by visiting one of the many parks such as the <i>Kiwanis Park</i>.</p>
                  </div>
                </section>
              </div>
              <div className="col-4 col-12-medium">
                {/* Box */}
                <section className="box feature">
                  <a href="https://www.yorku.ca/" target="_blank" className="image featured"><img src="assets/uniPics/yu.jpg" alt="" /></a>
                  <div className="inner">
                    <header>
                      <h2>York University<br /><i className="fa fa-map-marker" />Toronto</h2>
                      <p>Founded in 1959, this university incorporates a lot of Roman culture in its campus, such as with the names of its colleges.</p>
                    </header>
                    <p>Visit the <i>Casa Loma</i>, a stately castle with seasonal gardens and rich gardens. Animal lovers will enjoy both the <i>Toronto Zoo</i> and <i>Ripley’s Aquarium</i> for a worldly experience.</p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>

	
    );
  }
}

export default uniInfo;