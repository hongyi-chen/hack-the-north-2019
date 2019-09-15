import React, { Component } from "react";
import "./tourSearch.css";
import "./login.css";
import firebase from "firebase";
import axios from "axios";  
import FileUploader from "react-firebase-file-uploader";
import Papa from 'papaparse';

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

    this.state = {
        data: []
    };

    this.getData = this.getData.bind(this);
  }

  componentWillMount() {
      this.getCsvData();
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
  }

  async getCsvData() {
      let csvData = await this.fetchCsv();

      Papa.parse(csvData, {
          complete: this.getData
      });
  }

  render() {
    return (
        <section className="data-controller">
            ...
        </section>
    );
  }
} 

class ProfilePage extends Component {
  state = {
    username: null,
    avatar: null,
    isUploading: false,
    progress: 0,
    avatarURL: null
  };

  handleChangeUsername = event =>
    this.setState({ username: event.target.value });
  handleUploadStart = () => this.setState({ isUploading: true, progress: 0 });
  handleProgress = progress => this.setState({ progress });
  handleUploadError = error => {
    this.setState({ isUploading: false });
    console.error(error);
  };
  handleUploadSuccess = filename => {
    this.setState({ avatar: filename, progress: 100, isUploading: false });
    firebase
      .storage()
      .ref("csv")
      .child(filename)
      .getDownloadURL()
      .then(url => this.setState({ avatarURL: url }));
  };
}

class brokerSearch extends Component {
  state = {
    uniDestination: null,
    visitSeason: null,
    amountTravellers: null
  };

  searchTours(){
    axios
      .post("http://localhost:4000/searchTours",{
        uniDestination: this.state.uniDestinations,
        visitSeason: this.state.visitSeason,
        amountTravellers: this.state.amountTravellers
      })
      .then(res => {
        // write some code here
      })
  }

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

            <div className="search_item_cool">
              <form>
                <div>
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
          </div>
        </div>
      </div>
    );
  }
}

export default brokerSearch;
