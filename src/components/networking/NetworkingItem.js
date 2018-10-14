import React, { Component } from "react";

class NetworkingItem extends Component {
  render() {
    return (
        <div className="networking-item">
          <div className="networking-item-info">
            <h1 className="networking-organisation-name">{this.props.organisation_name}</h1>
            <h2 className="networking-sector-activity">{this.props.sector_activity}</h2>
            <h2 className="networking-organisation-logo">
              {this.props.organisation_logo}
            </h2>
            <p className="networking-description">
              {this.props.organisation_description}
            </p>
          </div>
        </div>
      );
    }
  }

  export default NetworkingItem;