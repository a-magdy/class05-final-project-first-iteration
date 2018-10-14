import React, { Component } from "react";

class MentorItem extends Component {
    render() {
     return (
       <div className="mentor-item">
         <div className="mentor-item-info"> 
          <h1 className="mentor-first-name">{this.props.first_name}</h1>
          <h2 className="mentor-last-name">{this.props.last_name}</h2>
          <h2 className="mentor-profile-picture">{this.props.profile_picture}</h2>
         <h2 className="mentor-email">{this.props.email}</h2>
    <p className="mentor-desription">
            {this.props.mentor_description}
        </p>          
     </div> 
     </div>
     );
 }
}


export default MentorItem;