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
    console.log(e);
    let choice = this.state.checked;
    this.setState({ checked: !choice });
  };
  handleRangeChange = (e) => {
    console.log(e);
  };

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
      <div className="card">
        <div className="card-body">
          <label>
            <span>Year range</span>
            <Switch
              onChange={this.handleChange}
              checked={this.state.checked}
              className="react-switch"
            />
          </label>

          {Content}
        </div>
      </div>
    );
  }
}
