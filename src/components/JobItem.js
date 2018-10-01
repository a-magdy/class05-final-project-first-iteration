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
              // src="http://sweetcrudereports.com/wp-content/uploads/2017/12/Rigmen-doing-their-thing-on-a-Total-operated-platform-768x378.jpg"
              src={this.props.job.image}
              alt="job environment"
            />
          </div>
          <a href="#link" className="job-branding-logo" alt="job company logo">
            <img src={this.props.job.logo} alt="job company logo" />
          </a>
          <div className="job-dates">
            <p className="job-created">
              Created: <span className="">{this.props.job.created}</span>
            </p>
            <p className="job-deadline">
              Deadline: <span className="">{this.props.job.deadline}</span>
            </p>
          </div>
        </div>
        <div className="job-item-info">
          <h1 className="job-title">{this.props.job.title}</h1>
          <h2 className="job-company">{this.props.job.companyName}</h2>
          <p className="job-description">{this.props.job.description}</p>
        </div>
        <div className="job-links">
          <a href="#link" className="job-read-more" alt="read more">
            read more
          </a>
          <div class="vl" />
          <a href="#link" className="job-apply" alt="apply for job">
            apply
          </a>
        </div>
      </div>
    );
  }
}

export default JobItem;
