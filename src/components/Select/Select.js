import React from "react";
import "./Select.css";

const Select = () => {
  return (
    <div className="select-container">
      <select id="categories" name="categories">
        <option value="All">All</option>
        <option value="Internships">Internships</option>
        <option value="Events">Events</option>
        <option value="Mentors">Mentors</option>
        <option value="Networking">Networking</option>
      </select>
    </div>
  );
};

export default Select;
