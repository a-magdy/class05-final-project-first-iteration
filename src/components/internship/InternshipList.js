import React, { Component } from "react";
import InternshipItem from "./InternshipItem";
import InternshipData from "../../database/InternshipData.json";

class InternshipList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      InternshipData,
      nextId: 4
    };
  }

  render() {
    JSON.stringify(this.state.InternshipData);
    return (
      <div className="internship-list-container">
        <div className="internship-list">
          {this.state.InternshipData.map(internship => {
            console.log(internship);
            return (
              <InternshipItem
                internship_title={internship.internship_title}
                id={internship.id}
                key={internship.id}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default InternshipList;
