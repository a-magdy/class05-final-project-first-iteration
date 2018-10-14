import React, { Component } from "react";

// styles
import "./App.css";

// components
import Header from "./components/Header";
import Map from "./components/Map";
import InternshipList from "./components/internship/InternshipList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="page-content-container">
          {/* <InternshipList /> */}
          <Map mapCenter={{ lat: 55.676098, lng: 12.568337 }} Zoom={10} />
        </div>
      </div>
    );
  }
}

export default App;
