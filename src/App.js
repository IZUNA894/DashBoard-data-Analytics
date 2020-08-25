import React, { Component } from "react";
import "../node_modules/react-vis/dist/style.css";

import Navbar from "./components/navbar.js";
import Graph from "./components/graph.js";
import Styles from "./app.module.css";
import PointDetail from "./components/pointDetail";
import YearSlider from "./components/yearSlider";
class App extends Component {
  state = {
    point: undefined,
    yearStart: 2016,
    yearEnd: 2200,
  };
  addPoint = (point) => {
    this.setState({ point });
  };
  setYearValues = (lower, upper) => {
    this.setState({ yearStart: lower, yearEnd: upper });
    console.log(lower, upper);
  };
  render() {
    return (
      <div className="App">
        <div className="content">
          <div
            className="container "
            style={{ maxWidth: "100%", marginTop: "2px" }}
          >
            <Navbar />
          </div>
        </div>

        <div className="content" style={{ display: "block" }}>
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-8">
                <Graph
                  addPoint={this.addPoint}
                  yearStart={this.state.yearStart}
                  yearEnd={this.state.yearEnd}
                />
              </div>
              <div className="col-sm-4">
                <PointDetail point={this.state.point} />
                <YearSlider setYearValues={this.setYearValues} />
                <div className="card">
                  <div className="card-body">hhheh</div>
                </div>
                <div className="card">
                  <div className="card-body">hhheh</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
