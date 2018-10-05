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
            <li>
              <a href="#link" alt="personal page">
                <i class="fas fa-user" />
              </a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
