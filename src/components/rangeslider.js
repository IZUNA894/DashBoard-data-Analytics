import React, { Component } from "react";
import { Handle } from "./handle.js";
export class RangeSlider extends Component {
  // @param id:string         => ID of the DOM element where you want to display rangeslider. Required
  // @param range:object      => Define max and min range. Default {min:0, max:100}
  // @param width:number      => Specify the width of the range slider. Default 150px
  // @param handles:array     => Number of handles you need, Maximum 10 handles allowed.
  //                          => Default [0] specify the position of handles in array by comma seperated.
  // @param displayValues     => True to make values visble over the handle, False to make values invisible.
  //                          => Default false;

  constructor(props) {
    super(props);
    this.state = {
      lower: 2018,
      upper: 2060,
    };
    // Get container
    let options = this.props;
    this.id = options.id;

    // Set the default values
    this.range = options.range ? options.range : { min: 0, max: 100 };
    this.width = options.width ? options.width : 150;
    this.handles = options.handles ? options.handles : [0];
    this.displayValue = options.displayValue ? options.displayValue : false;

    // pixels per unit
    this.pixelsPerUnit = this.width / (this.range.max - this.range.min);

    // handle DOMs
    this.handleDOMs = [];
  }
  setValuesLower = (lower) => {
    this.setState({ lower });
    this.props.setYearValues(lower, this.state.upper);
  };
  setValuesUpper = (upper) => {
    this.setState({ upper });
    this.props.setYearValues(this.state.lower, upper);
  };
  componentDidMount() {
    this.container = document.getElementById(this.id);
    this.init();
  }
  init = () => {
    this.container.style.width = this.width + "px";
    this.container.classList.add("range-slider");

    // Creating seekbar
    this.seekbar = document.createElement("div");
    this.seekbar.classList.add("seekbar");
    this.container.appendChild(this.seekbar);

    // Creating handles
    // for (let i = 0; i < this.handles.length; i++) {
    let position = this.handles[0];
    let handle1 = new Handle(this, position, 0, this.setValuesLower);
    this.handleDOMs.push(handle1);
    position = this.handles[1];
    let handle2 = new Handle(this, position, 1, this.setValuesUpper);
    this.handleDOMs.push(handle2);
    // }
  };

  render() {
    return null;
  }
}
