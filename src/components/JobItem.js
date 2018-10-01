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

    console.log(this.props.job);
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
          <h1 className="job-title">{this.props.job.title}</h1> 
          <h2 className="job-company">{this.props.job.companyName}</h2>
          <p className="job-description">{this.props.job.description}</p>
          <p className="job-date"> 
            Date Created: {this.props.job.created}.
          </p>
          <p className="job-deadline">Deadline {this.props.job.deadline}</p>
        </div>
        <div className="job-links">
          <a href="#link" className="job-read-more" alt="read more">
            read more
          </a>
          <a href="#link" className="job-apply" alt="apply for job">
            apply
          </a>
        </div>
      </div>
    );
  }
}

export default JobItem;
