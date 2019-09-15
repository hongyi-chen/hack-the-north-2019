import React, { Component } from "react";
import "./tourSearch.css";
import "./login.css";
import firebase from "firebase";
import FileUploader from "react-firebase-file-uploader";
 
const firebaseConfig = {
  apiKey: "AIzaSyC08FLEjf003pV-j9t9pYHs2eu_MahFqfs",
  authDomain: "hack-the-north2019.firebaseapp.com",
  databaseURL: "https://hack-the-north2019.firebaseio.com",
  projectId: "hack-the-north2019",
  storageBucket: "hack-the-north2019.appspot.com",
  messagingSenderId: "683328898630",
  appId: "1:683328898630:web:42481d6cc2ff9ffd722c47"
};
//firebase.initializeApp(firebaseConfig);

class ProfilePage extends Component {
  state = {
    username: "",
    avatar: "",
    isUploading: false,
    progress: 0,
    avatarURL: ""
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
      .ref("images")
      .child(filename)
      .getDownloadURL()
      .then(url => this.setState({ avatarURL: url }));
  };
}




class brokerSearch extends Component {
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
                  <div><strong>Destination</strong></div>
                  <input
                    type="text"
                    className="destination search_input"
                    placeholder="What is your destination?"
                    required="required"
                  />
                </div>
                <div className="search_item">
                  <div><strong>Season of Visit</strong></div>
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
                  <div><strong>Amount of travellers</strong></div>
                  <select
                    name="travellers"
                    id="travellers_1"
                    className="amountTravellers search_input"
                    required="required"
                  >
                    <option>How many travellers will there be with you?</option>
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
        <div id = "file upload">
        <form>
          <label>Username:</label>
          <input
            type="text"
            value={this.setState.username}
            name="username"
            onChange={this.handleChangeUsername}
          />
          <label>Avatar:</label>
          {this.state.isUploading && <p>Progress: {this.state.progress}</p>}
          {this.state.avatarURL && <img src={this.state.avatarURL} />}
          <FileUploader
            accept="image/*"
            name="avatar"
            randomizeFilename
            storageRef={firebase.storage().ref("images")}
            onUploadStart={this.handleUploadStart}
            onUploadError={this.handleUploadError}
            onUploadSuccess={this.handleUploadSuccess}
            onProgress={this.handleProgress}
          />
        </form>
      </div>
      </div>
    );
  }
}

export default brokerSearch;
