import React, { Component } from "react";
import NetworkingItem from "./NetworkingItem";
import NetworkingData from "../../database/NetworkingData.json";

class NetworkingList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      NetworkingData,
      nextId: 4
    };
  }

  render() {
    JSON.stringify(this.state.NetworkingData);
    return (
      <div className="networking-list-container">
        <div className="networking-list">
          {this.state.NetworkingData.map(networking => {
            return (

  export default NetworkingList;