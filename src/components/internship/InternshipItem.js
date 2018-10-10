import React, { Component } from "react";

class InternshipItem extends Component {
  render() {
    console.log(`this is item ${this.props.internship_title}`);
    return (
      <div className="internship-item">
        <div className="internship-item-info">
          <h1 className="internship-title">{this.props.internship_title}</h1>
          <h2 className="internship-company">
            {this.props.internship_category}
          </h2>
          <h2 className="internship-organisation">
            {this.props.organisation_name}
          </h2>
          <h2 className="internship-department">{this.props.department}</h2>
          <p className="internship-description">
            {this.props.internship_description}
          </p>
        </div>
      </div>
    );
  }
}

export default InternshipItem;
