import React, { Component } from "react";
import "./tourSearch.css";

class studentSearch extends Component {
  render() {
    return (
      <div>
        <header id="header" className="container">
          {/* Logo */}
          <div id="logo">
            <h1>tourhub</h1>
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
                    type="text"
                    className="destination search_input"
                    required="required"
                  >
                    <option>What is your university destination?</option>
                    <option>Brock University</option>
                    <option>Carleton University</option>
                    <option>McMaster University</option>
                    <option>OCAD University</option>
                    <option>Queen's University</option>
                    <option>Ryerson University</option>
                    <option>University of Guelph</option>
                    <option>University of Ottawa</option>
                    <option>University of Toronto</option>
                    <option>University of Waterloo</option>
                    <option>University of Windsor</option>
                    <option>University of Western Ontario</option>
                    <option>Wilfrid Laurier University</option>
                    <option>York University</option>
                  </select>
                </div>
                <div className="search_item">
                  <div>
                    <strong>Season of Visit</strong>
                  </div>
                  <select
                    type="text"
                    className="season search_input"
                    required="required"
                  >
                    <option>What season would you like to visit?</option>
                    <option>Fall</option>
                    <option>Winter</option>
                    <option>Spring</option>
                  </select>
                </div>
                <div className="search_item">
                  <div>
                    <strong>Amount of travellers</strong>
                  </div>
                  <select
                    name="travellers"
                    id="travellers_1"
                    className="amountTravellers search_input"
                    required="required"
                  >
                    <option>How many travellers are there?</option>
                    <option>01</option>
                    <option>02</option>
                    <option>03</option>
                    <option>04</option>
                    <option>05</option>
                    <option>06</option>
                    <option>07</option>
                    <option>08</option>
                    <option>09</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                    <option>13</option>
                    <option>14</option>
                    <option>15</option>
                    <option>16</option>
                    <option>17</option>
                    <option>18</option>
                    <option>19</option>
                    <option>20</option>
                    <option>21</option>
                    <option>22</option>
                    <option>23</option>
                    <option>24</option>
                    <option>25</option>
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
          </div>
        </div>
        );
      </div>
    );
  }
}

export default studentSearch;
