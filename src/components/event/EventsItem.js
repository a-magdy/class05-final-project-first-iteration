import React, { Component } from "react";


class EventsItem extends Component {
    render() {
      return (
        <div className="events-item">
          <div className="events-item-info">
            <h1 className="event-name">{this.props.event_name}</h1>
            <h2 className="event-type">{this.props.event_type}</h2>
            <h2 className="event-address">
              {this.props.event_adress}
            </h2>
            <p className="event-start-date">
              {this.props.event_start_date}
            </p>
            <p className="event-end-date">
              {this.props.event_end_date}
            </p>
          </div>
        </div>
      );
    }
  }
  
  export default EventsItem;
  