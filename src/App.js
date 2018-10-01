import React, { Component } from "react";
import "./App.css";
import JobItem from "./components/JobItem";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      jobs: [
        {
          jobId:0,
          title:'Engineer',
          companyName:'Marsk',
          description:'Are you ambitious? Would you like to join a team of dedicated finance professionals in a successful global company? Then here is a golden opportunity to join Marsk Drilling and build a strong career in Finance.You will get responsibility to drive and own the preparation and reporting of Admin &Overhead financial data. You will be conducting monthly reporting ensuring compliance with controlling policies for the HQ Key to this position is to interact with stakeholders, such as Department Heads, our Global Service Center accounting team in India and the HQ team to ensure compliance and delivering accurate reporting on time.As we are always looking for ways to improve the way we work, you will be using your expertise and providing input to help improve the control environment to continuously ensure accurate accounting and reporting for HQ.The position is part of GBS Financial Services.',
          created:'23.09.2018',
          deadline: '20.10.2018'
        },
        
        {
          jobId:1,
          title:'Project Management',
          companyName:'Deloitte',
          description:'blabalabla',
          created:'24.09.2018',
          deadline: '18.10.2018'
        },

        {
          jobId:2,
          title:'Baker',
          companyName:'Lagkagehuset',
          description:'blabalabla',
          created:'24.09.2018',
          deadline: '17.10.2018'
        },
        {
          jobId:3,
          title:'Dance teacher',
          companyName:'Studentehuset',
          description:'blabalabla',
          created:'12.09.2018',
          deadline: '12.11.2018'
        }        
      ],  
      nextId:4
    };

  }
  
  render() {
    return (
      <div className="App">
        <header className="masthead">
          <h1 className="site-branding">
            <i className="fab fa-bandcamp" />
            Jobify
          </h1>
          <nav className="header-menu">
            <ul className="nav-container">
              <li className="nav-item">
                <a href="#link" alt="find job">
                  find job
                </a>
              </li>
              <li className="nav-item">
                <a href="#link" alt="resume page">
                  my resume
                </a>
              </li>
              <li className="nav-item my-page">
                <a href="#link" alt="personal page">
                  my page
                </a>
              </li>
            </ul>
          </nav>
        </header>
        <ul>
              {
                this.state.jobs.map((job) => {
                  return (
                  <JobItem 
                  job={job}
                  key={job.jobId} 
                  id={job.jobId} 
                  />
                )})
              }
            </ul>
      </div>
    );
  }
}

export default App;
