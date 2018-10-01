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
          title:'Scandinavian Tobacco Group A/S',
          companyName:'Deloitte',
          description:'This position is a key role within all STG companies and is responsible for sourcing and contract management of Indirect spend categories with a primary focus on Category Marketing Spend Management.Scandinavian Tobacco Group A/S.The role is directly responsible for all spend in the Category. Responsibility is end-to-end category spend including but not limited to: Develop category strategy, business case execution, influencing operations, business and finance leaders to comply with category strategic direction and leading cross-functional project teams through the sourcing process.At Scandinavian Tobacco Group, we welcome talented and competitive people, and reward them with outstanding career development, personal growth and leadership opportunities.',
          created:'24.09.2018',
          deadline: '18.10.2018'
        },

        {
          jobId:2,
          title:'Baker',
          companyName:'Lagkagehuset',
          description:'Are you a trained baker? And do you want to stand for production at our Viennese bread line - and make sure the machine is not in a cake? Nordens Brød produces a wide range of bakery and confectionery products for supermarket chains, filling stations, air catering and food service. In addition, we own the chains Holms Bager and Brødflov and Lagkagehuset. At Kastrup in Amager we have 5 production units where you become part of the pastry department and work closely with especially 5 other colleagues. The main task is to ensure that our computer-driven process line for Viennese bread is running as it should. If you are drowning on the plant and if you encounter problems, turn on the machine and prevent the crash. In addition, you work closely with the bakers and help if needed.',
          created:'24.09.2018',
          deadline: '17.10.2018'
        },
        {
          jobId:3,
          title:'Sales Team Lead',
          companyName:'To Good To Go',
          description:'One third of all food produced is wasted. We’re on a mission to change that!Too Good To Go is a mobile app which reduces food waste by making surplus food from cafés, restaurants and supermarkets available to users. Our users purchase food through the app, collect locally and enjoy knowing they are saving food, money - and the planet.We’re looking for a passionate Sales Team Lead for our team of 4 sales representatives as a playing coach. We work with a combination of phone and field sales, and we expect you to sign new stores yourself, while coaching the team to top-performance.',
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
