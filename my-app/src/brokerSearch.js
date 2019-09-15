import React, { Component } from "react";
import "./tourSearch.css";

class brokerSearch extends Component {
  render() {
    return (
      <div>
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
                      <div>destination</div>
                      <input
                        type="text"
                        className="destination search_input"
                        required="required"
                      />
                    </div>
                    <div className="search_item">
                      <div>check in</div>
                      <input
                        type="text"
                        className="check_in search_input"
                        placeholder="YYYY-MM-DD"
                      />
                    </div>
                    <div className="search_item">
                      <div>check out</div>
                      <input
                        type="text"
                        className="check_out search_input"
                        placeholder="YYYY-MM-DD"
                      />
                    </div>
                    <div className="search_item">
                      <div>adults</div>
                      <select
                        name="adults"
                        id="adults_1"
                        className="dropdown_item_select search_input"
                      >
                        <option>01</option>
                        <option>02</option>
                        <option>03</option>
                      </select>
                    </div>
                    <div className="search_item">
                      <div>children</div>
                      <select
                        name="children"
                        id="children_1"
                        className="dropdown_item_select search_input"
                      >
                        <option>0</option>
                        <option>02</option>
                        <option>03</option>
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

export default brokerSearch;
