import React, { Component } from "react";
import "../node_modules/react-vis/dist/style.css";

import Navbar from "./components/navbar.js";
import Graph from "./components/graph.js";
import Styles from "./app.module.css";
import PointDetail from "./components/pointDetail";
import YearSlider from "./components/yearSlider";
import Axis from "./components/axis.js";
import Filters from "./components/filters";
import Measures from "./components/measures";
import Swot from "./components/swot";
import Confidence from "./components/confidence";
import Tiles from "./components/tiles";
import DataTable from "./components/dataTable";

class App extends Component {
  state = {
    point: undefined,
    yearStart: 2016,
    yearEnd: 2200,
    hAxis: "country",
    vAxis: "sector",
    measure: "intensity",
    filters: {
      topic: "All",
      pestle: "All",
      region: "All",
      country: "All",
      sector: "All",
    },
  };
  addPoint = (point) => {
    this.setState({ point });
  };
  setYearValues = (lower, upper) => {
    this.setState({ yearStart: lower, yearEnd: upper });
  };
  sethAxis = (value) => {
    this.setState({ hAxis: value });
  };
  setvAxis = (value) => {
    this.setState({ vAxis: value });
  };
  setMeasure = (value) => {
    this.setState({ measure: value });
  };
  setFilters = (e) => {
    this.setState({ filters: { ...this.state.filters, ...e } });
  };
  render() {
    return (
      <div className="App">
        <div
          className="content"
          style={{ paddingTop: "10px", paddingBottom: "10px" }}
        >
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
                  hAxis={this.state.hAxis}
                  vAxis={this.state.vAxis}
                  measure={this.state.measure}
                  topicF={this.state.filters.topic}
                  pestleF={this.state.filters.pestle}
                  countryF={this.state.filters.country}
                  regionF={this.state.filters.region}
                  sectorF={this.state.filters.sector}
                />
              </div>
              <div className="col-sm-4">
                <PointDetail point={this.state.point} />
                <YearSlider setYearValues={this.setYearValues} />
                <Axis sethAxis={this.sethAxis} setvAxis={this.setvAxis} />
                <div className="row">
                  <div className="col-sm-8 ">
                    <Filters
                      hAxis={this.state.hAxis}
                      vAxis={this.state.vAxis}
                      measure={this.state.measure}
                      yearStart={this.state.yearStart}
                      yearEnd={this.state.yearEnd}
                      setFilters={this.setFilters}
                    />
                  </div>
                  <div className="col-sm-4 ">
                    <div className="row">
                      <div className="col-sm-12" style={{ paddingLeft: "0px" }}>
                        <Measures setMeasure={this.setMeasure} />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-12" style={{ paddingLeft: "0px" }}>
                        <Confidence />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-12" style={{ paddingLeft: "0px" }}>
                        <Swot />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* first row ends */}
          <div style={{ padding: "0 20px" }}>
            <div className="row" style={{ margin: "0", padding: "0px" }}>
              <Tiles
                hAxis={this.state.hAxis}
                vAxis={this.state.vAxis}
                measure={this.state.measure}
                yearStart={this.state.yearStart}
                yearEnd={this.state.yearEnd}
                topicF={this.state.filters.topic}
                pestleF={this.state.filters.pestle}
                countryF={this.state.filters.country}
                regionF={this.state.filters.region}
                sectorF={this.state.filters.sector}
              />
            </div>
            <div className="row" style={{ margin: "0", padding: "0px" }}>
              <DataTable
                hAxis={this.state.hAxis}
                vAxis={this.state.vAxis}
                measure={this.state.measure}
                yearStart={this.state.yearStart}
                yearEnd={this.state.yearEnd}
                topicF={this.state.filters.topic}
                pestleF={this.state.filters.pestle}
                countryF={this.state.filters.country}
                regionF={this.state.filters.region}
                sectorF={this.state.filters.sector}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
