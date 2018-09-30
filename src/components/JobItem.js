import React, { Component } from "react";

class JobItem extends Component {
  render() {
    return (
      <div className="job-item">
        <div className="job-item-info">
          <h1 className="job-title">Job Title</h1>
          <h2 className="job-company">Company</h2>
          <p className="job-description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Accusantium pariatur illo ab consectetur id porro ad quos
            praesentium voluptatem? Corporis nam commodi molestias cum placeat,
            quos quasi vero quia expedita cumque, voluptatum natus repellat
            doloremque sit officiis consequatur modi explicabo laborum fuga.
            Officiis corporis eligendi, dolores doloribus atque voluptates
            suscipit.
          </p>
          <p className="job-date">
            Date Created: <time datetime="2012-12-08">8 December 2012</time>.
          </p>
        </div>
        {/* <div className="job-item-image">
          <img src="https://picsum.photos/300/300/?random" alt="Job Image" />
        </div> */}
      </div>
    );
  }
}

export default JobItem;
