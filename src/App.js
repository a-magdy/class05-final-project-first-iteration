import React, { Component } from "react";

// styles
import "./App.css";

// components
import Header from "./components/Header";
import InternshipList from "./components/internship/InternshipList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="page-content-container">
          <InternshipList />
        </div>
      </div>
    );
  }
}

export default App;
