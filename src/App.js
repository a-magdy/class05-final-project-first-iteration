import React, { Component } from "react";
import "./App.css";
import JobList from "./components/JobList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="masthead">
          <h1 className="site-branding">
            <i class="fab fa-bandcamp" />
            Jobify
          </h1>
          <nav className="header-menu">
            <ul className="nav-container">
              <li className="nav-item">
                <a href="#link" alt="find job">
                  find job
                </a>
              </li>
              <li className="nav-item">
                <a href="#link" alt="resume page">
                  my resume
                </a>
              </li>
              <li className="nav-item my-page">
                <a href="#link" alt="personal page">
                  my page
                </a>
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
