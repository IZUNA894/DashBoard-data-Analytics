import React, { Component } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import Styles from "./measures.module.css";
export default class measures extends Component {
  constructor(props) {
    super(props);
    this.state = {
      measure: { value: "intensity", label: "Intensity" },
    };
  }

  handleChange = (e) => {
    this.props.setMeasure(e.value);
    this.setState({ measure: e });
  };
  render() {
    const options = [
      { value: "intensity", label: "Intensity" },
      { value: "likelihood", label: "Likelihood" },
      { value: "relevance", label: "Relevance" },
    ];
    return (
      <div className="card" style={{ marginTop: "10px", marginBottom: "10px" }}>
        <div className="card-body">
          <h5
            style={{
              fontSize: "15px",
              fontWeight: "600",
              lineHeight: "16px",
              marginBottom: "5px!important",
            }}
          >
            Measures
          </h5>

          <Dropdown
            controlClassName={`${Styles.cDropdownControl}`}
            options={options}
            onChange={this.handleChange}
            value={this.state.measure}
            placeholder="Select an option"
          />
        </div>
      </div>
    );
  }
}
