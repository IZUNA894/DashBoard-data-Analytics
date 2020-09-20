import React, { Component } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
export default class axis extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hAxis: { value: "country", label: "Country" },
      vAxis: { value: "sector", label: "Sector" },
    };
  }
  handleChangeH = (e) => {
    this.props.sethAxis(e.value);
    this.setState({ hAxis: e });
  };
  handleChangeV = (e) => {
    this.props.setvAxis(e.value);
    this.setState({ vAxis: e });
  };
  render() {
    const hOptions = [
      { value: "topic", label: "Topic" },
      { value: "region", label: "Region" },
      { value: "pestle", label: "Pestle" },
      { value: "sector", label: "Sector" },
      { value: "country", label: "Country" },
    ];
    const vOptions = [
      { value: "topic", label: "Topic" },
      { value: "region", label: "Region" },
      { value: "pestle", label: "Pestle" },
      { value: "sector", label: "Sector" },
      { value: "country", label: "Country" },
    ];

    return (
      <div className="row">
        <div className="col-sm-12">
          <div
            className="card"
            style={{ marginTop: "10px", marginBottom: "10px" }}
          >
            <div className="card-body">
              <h4>
                <strong>Coordinates</strong>{" "}
              </h4>
              <div className="row">
                <div className="col-sm-6">
                  <h5>
                    <strong>Horizontal Axis</strong>
                  </h5>
                  <Dropdown
                    options={hOptions}
                    onChange={this.handleChangeH}
                    value={this.state.hAxis}
                    placeholder="Select an option"
                  />
                </div>

                <div className="col-sm-6">
                  <h5>
                    <strong>Vertical Axis</strong>
                  </h5>
                  <Dropdown
                    options={vOptions}
                    onChange={this.handleChangeV}
                    value={this.state.vAxis}
                    placeholder="Select an option"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
