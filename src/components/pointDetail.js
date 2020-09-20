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
        <h3 style={{ textAlign: "center", textTransform: "capitalize" }}>
          {point.country}
        </h3>
        <p className="" style={{ textAlign: "center" }}>
          {this.calIntensity()} | {relevance[point.relevance - 1]} |{" "}
          {likelihood[point.likelihood - 1]}
        </p>
        <a href={point.url} style={{ textDecoration: "none" }}>
          <p style={{ textAlign: "start", color: "#337ab7" }}>{point.title}</p>
        </a>
      </div>
    ) : (
      "Click any point to see detail"
    );
    return (
      <div className="card" style={{ marginTop: "10px", marginBottom: "10px" }}>
        <div className="card-body">{Content}</div>
      </div>
    );
  }
}
