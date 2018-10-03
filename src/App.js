import React, { Component } from "react";

// styles
import "./App.css";

// components
import Header from "./components/Header";
import JobList from "./components/job-list";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <JobList />
      </div>
    );
  }
}

export default App;
