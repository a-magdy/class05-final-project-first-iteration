import React, { Component } from "react";
import JobItem from "./JobItem";

class JobList extends Component {
  render() {
    return (
      <div className="job-list-container">
        <div className="job-list">
          <JobItem />
          <JobItem />
          <JobItem />
          <JobItem />
        </div>
      </div>
    );
  }
}

export default JobList;
