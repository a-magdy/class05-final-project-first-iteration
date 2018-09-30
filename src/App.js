import React, { Component } from "react";
import "./App.css";
import JobList from "./components/JobList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="masthead">
          <h1 className="header-logo">
            <i class="fab fa-bandcamp" />
            Jobify
          </h1>
          <nav className="navigation-bar">
            <ul className="nav-container">
              <li className="nav-item">
                <a href="#">find job</a>
              </li>
              <li className="nav-item">
                <a href="#">my resume</a>
              </li>
              <li className="nav-item my-page">
                <a href="#">my page</a>
              </li>
            </ul>
          </nav>
        </header>
        <JobList />
      </div>
    );
  }
}

export default App;
