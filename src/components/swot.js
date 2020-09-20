import React, { Component } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import Styles from "./swot.module.css";

export default class swot extends Component {
  state = {
    swot: { value: "All", label: "All" },
  };
  handleChange = (e) => {};
  render() {
    const hOptions = [
      { value: "strength", label: "Strength" },
      { value: "weakness", label: "Weakness" },
      { value: "oppurtunity", label: "Oppurtunity" },
      { value: "threat", label: "Threat" },
      { value: "All", label: "All" },
    ];
    return (
      <div className="card" style={{ marginTop: "10px", marginBottom: "10px" }}>
        <div className="card-body" style={{ paddingTop: "5px" }}>
          <h5
            style={{
              fontSize: "15px",
              fontWeight: "600",
              lineHeight: "16px",
              marginBottom: "5px!important",
            }}
          >
            SWOT
          </h5>

          <Dropdown
            options={hOptions}
            onChange={this.handleChange}
            value={this.state.swot}
            placeholder="Select an option"
            controlClassName={`${Styles.cDropdownControl}`}
          />
        </div>
      </div>
    );
  }
}
