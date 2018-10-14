import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./TextInput.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

class TextInput extends Component {
  state = {
    inputValue: null
  };

  handleChange = e => {
    this.setState({
      inputValue: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    if (this.state.inputValue)
      console.log("form submitted", this.state.inputValue);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="input-container">
            <input
              className="input-field"
              type="text"
              placeholder={this.props.placeholder}
              name={this.props.name}
              onChange={this.handleChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default TextInput;
