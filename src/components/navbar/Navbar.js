import React from "react";
import "./Navbar.css";


function Navbar() {
  return (
    <ul className="topnav">
      <li>
        <a href="#internships">Internships </a>
      </li>
      <li>
        <a href="#events">Events</a>
      </li>
      <li>
        <a href="#mentors">Mentors</a>
      </li>
      <li>
        <a href="#networking">Networking</a>
      </li>
      <li className="right">
        <a href="#about">About</a>
      </li>
    </ul>
  );
}

export default Navbar;
