import React, { Component } from "react";
class JobItem extends Component {
  // Job Item Component Content
  /* 
    -*- Job Branding:
          > Company logo
          > Images (work environment)
    -*- Job Information and content:
          > Title
          > Company name
          > Description
          > Created Date
          > Deadline
    -*- Job Links
          > Read more
          > Apply
  */
  render() {
    return (
      <div className="job-item">
        <div className="job-branding">
          <div className="job-item-image">
            <img
              src="https://www.total.com/sites/default/files/styles/carrefour/public/thumbnails/image/36329_0.jpg"
              alt="job environment"
            />
          </div>
          <a href="#link" className="job-branding-logo" alt="job company logo">
            <img
              src="https://mbtskoudsalg.com/images/download-image-png-format-2.png"
              alt="job company logo"
            />
          </a>
        </div>
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
        <div className="job-links">
          <a href="#link" class="job-read-more" alt="read more">
            read more
          </a>
          <a href="#link" class="job-apply" alt="apply for job">
            apply
          </a>
        </div>
      </div>
    );
  }
}

export default JobItem;
