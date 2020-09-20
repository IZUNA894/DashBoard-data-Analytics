import React, { Component } from "react";
import Switch from "react-switch";
import { RangeSlider } from "./rangeslider.js";
import "./slider.css";
export default class yearSlider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: false,
      upper: 0,
      lower: 0,
    };
    this.setYearValues = this.props.setYearValues;
  }
  handleChange = (e) => {
    let choice = this.state.checked;
    if (choice === true) this.props.setYearValues(2016, 2200);
    this.setState({ checked: !choice });
  };
  handleRangeChange = (e) => {};

  componentDidMount() {}
  render() {
    let Content = "";
    if (this.state.checked) {
      Content = (
        <>
          <table>
            <tbody>
              <tr>
                <td>
                  <div id="slider2">
                    <RangeSlider
                      id="slider2"
                      range={{ min: 2016, max: 2200 }}
                      handles={[2016, 2200]}
                      width={300}
                      displayValue={true}
                      setYearValues={this.setYearValues}
                    />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </>
      );
    } else {
      Content = "";
    }
    return (
      <div className="card" style={{ marginTop: "10px", marginBottom: "10px" }}>
        <div className="card-body">
          <div style={{ justifyContent: "space-between", display: "flex" }}>
            <span>Year range</span>
            <span>
              <Switch
                onChange={this.handleChange}
                checked={this.state.checked}
                className="react-switch"
              />
            </span>
          </div>

          {Content}
        </div>
      </div>
    );
  }
}
