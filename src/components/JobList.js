import React, { Component } from "react";
import JobItem from "./JobItem";
import JobsState from "../states/JobsState";

class JobList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      JobsState,
      nextId: 4
    };
  }

  render() {
    return (
      <div className="job-list-container">
        <div className="job-list">
          {this.state.JobsState.jobs.map(job => {
            return <JobItem job={job} key={job.jobId} id={job.jobId} />;
          })}
        </div>
      </div>
    );
  }
}

export default JobList;
