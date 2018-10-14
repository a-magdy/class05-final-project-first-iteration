import React, { Component } from "react";
import EventsItem from "./EventsItem";
import EventsData from "../../database/EventsData.json";

class EventsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      EventsData,
      nextId: 4
    };
  }

render() {
    JSON.stringify(this.state.EventsData);
    return (
      <div className="event-list-container">
        <div className="event-list">
          {this.state.EventsData.map(event => {
            return (
              <EventsItem
                name={event.event_name}
                id={event.id}
                key={event.id}
                type={event.event_type}
                event_addresse={event.event_addresse}
                event_start_date={event.event_start_date}
                event_end_date={event.event_end_date}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default EventsList;
