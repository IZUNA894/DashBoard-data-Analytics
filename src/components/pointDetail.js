import React, { Component } from "react";
import { relevance, likelihood, impact } from "./../mappings";

export default class pointDetail extends Component {
  calIntensity = () => {
    let { point } = this.props;
    let intensity = 1;
    if (point.relevance != "") intensity *= point.relevance;
    if (point.impact != "") intensity *= point.impact;
    if (point.likelihood != "") intensity *= point.likelihood;
    return intensity;
  };

  render() {
    let { point } = this.props;

    let Content = this.props.point ? (
      <div className="">
        <p>{point.country}</p>
        <div className="">
          {this.calIntensity()} | {relevance[point.relevance - 1]} |{" "}
          {likelihood[point.likelihood - 1]}
        </div>
        <p>{point.title}</p>
      </div>
    ) : (
      "Click any point to see detail"
    );
    return (
      <div className="card">
        <div className="card-body">{Content}</div>
      </div>
    );
  }
}
