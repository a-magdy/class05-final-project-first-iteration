import React, { Component } from "react";
import MentorItem from "./MentorItem";
import MentorData from "../../database/MentorData.json";

class MentorList extends Component {
    constructor(props) {
      super(props);
      this.state = {
        MentorData,
        nextId: 4
      };
    }


render() {
    JSON.stringify(this.state.MentorData);
    return (
    <div className="mentor-list-container">
     <div className="mentor-list"> 
        {this.state.MentorData.map(mentor => {
        return (
         <MentorItem
            id={mentor.id}
            key={mentor.id}
            first_name={mentor.first_name}
            last_name={mentor.last_name}
            profile-picture={mentor.profile_picture}
            mentor_description={mentor.mentor_description}
            mentor_email={mentor.email}     
          />
     );        
    })}
     </div>
 </div>
    );
 }
}

export default MentorList;