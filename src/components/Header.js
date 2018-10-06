import React, { Component } from "react";
class Header extends Component {
  render() {
    return (
      <header className="masthead">
        <a className="site-branding" href="index.html">
          <img src ="https://raw.githubusercontent.com/HackYourFuture-CPH/class05-final-project/master/images/thread-logo.png"/>
         </a>
        <nav className="header-menu">
          <ul className="nav-container">
            <li className="nav-item">
              <a href="#link" alt="home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#link" alt="interships">
                Interships
              </a>
            </li>
            <li className="nav-item events">
              <a href="#link" alt="events">
                Events
              </a>
            </li>
            <li>
              <a href="#link" alt="mentors">
              Mentors
              </a>
            </li>
            <li className="nav-item networking">
              <a href="#link" alt="networking">
                Networking
              </a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
