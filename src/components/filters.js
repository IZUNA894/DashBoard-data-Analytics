import React, { Component } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { cleanData } from "./graph";

export default class filters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topic: "All",
      pestle: "All",
      region: "All",
      country: "All",
      sector: "All",
    };
    this.arr = ["topic", "pestle", "region", "country", "sector"];
    this.filterArr = [];
    this.data = [];
    this.topic = [];
    this.pestle = [];
    this.region = [];
    this.country = [];
    this.sector = [];
    this.ready = false;
  }
  getSubjectData = () => {
    this.topic = [];
    this.pestle = [];
    this.region = [];
    this.country = [];
    this.sector = [];

    for (const el of this.data) {
      let d = new Date(el.added);

      if (
        d.getFullYear() >= this.props.yearStart &&
        d.getFullYear() <= this.props.yearEnd
      ) {
        this.topic.push(el.topic);
        this.pestle.push(el.pestle);
        this.region.push(el.region);
        this.country.push(el.country);
        this.sector.push(el.sector);
      }
    }

    // let arr1 = [];
    // for (const x of this.filterArr) {
    //   arr1 = [];
    //   for (const el of this[x]) {
    //     if (el.length == 0) continue;
    //     if (!arr1.includes(el)) arr1.push(el);
    //   }
    //   this[x] = arr1.sort();
    //   this[x].unshift("All");
    //   console.log(this[x]);
    // }

    let arr1 = [];

    for (const el of this.topic) {
      if (el.length == 0) continue;
      if (!arr1.includes(el)) arr1.push(el);
    }
    this.topic = arr1.sort();
    this.topic.unshift("All");

    arr1 = [];
    for (const el of this.pestle) {
      if (el.length == 0) continue;
      if (!arr1.includes(el)) arr1.push(el);
    }
    this.pestle = arr1.sort();
    this.pestle.unshift("All");

    arr1 = [];
    for (const el of this.country) {
      if (el.length == 0) continue;
      if (!arr1.includes(el)) arr1.push(el);
    }
    this.country = arr1.sort();
    this.country.unshift("All");

    arr1 = [];
    for (const el of this.region) {
      if (el.length == 0) continue;
      if (!arr1.includes(el)) arr1.push(el);
    }
    this.region = arr1.sort();
    this.region.unshift("All");

    arr1 = [];
    for (const el of this.sector) {
      if (el.length == 0) continue;
      if (!arr1.includes(el)) arr1.push(el);
    }
    this.sector = arr1.sort();
    this.sector.unshift("All");

    this.ready = false;
  };
  getData = () => {
    this.data = cleanData(this.props);
  };

  handleChangeCountry = (e) => {
    this.setState({ country: e.value });
    this.props.setFilters({ country: e.value });
  };
  handleChangeTopic = (e) => {
    this.setState({ topic: e.value });
    this.props.setFilters({ topic: e.value });
  };
  handleChangeRegion = (e) => {
    this.setState({ region: e.value });
    this.props.setFilters({ region: e.value });
  };
  handleChangeSector = (e) => {
    this.setState({ sector: e.value });
    this.props.setFilters({ sector: e.value });
  };
  handleChangePestle = (e) => {
    this.setState({ pestle: e.value });
    this.props.setFilters({ pestle: e.value });
  };

  render() {
    this.filterArr = this.arr.filter((el) => {
      if (el !== this.props.hAxis && el !== this.props.vAxis) return true;
    });
    if (!this.ready) {
      this.getData();
      this.getSubjectData();
    }

    return (
      <div className="card" style={{ marginTop: "10px", marginBottom: "10px" }}>
        <div className="card-body">
          <h3
            style={{
              fontSize: "16px",
              fontWeight: "600",
              lineHeight: "16px",
              marginBottom: "5px!important",
            }}
          >
            Filters
          </h3>
          {this.filterArr.includes("topic") && (
            <>
              <h4>Topic</h4>
              <Dropdown
                options={this.topic}
                onChange={this.handleChangeTopic}
                value={this.state.topic}
                placeholder="Select an option"
              />
            </>
          )}

          {this.filterArr.includes("region") && (
            <>
              <h4>Region</h4>
              <Dropdown
                options={this.region}
                onChange={this.handleChangeRegion}
                value={this.state.region}
                placeholder="Select an option"
              />
            </>
          )}

          {this.filterArr.includes("pestle") && (
            <>
              <h4>Pestle</h4>

              <Dropdown
                options={this.pestle}
                onChange={this.handleChangePestle}
                value={this.state.pestle}
                placeholder="Select an option"
              />
            </>
          )}

          {this.filterArr.includes("country") && (
            <>
              <h4>Country</h4>

              <Dropdown
                options={this.country}
                onChange={this.handleChangeCountry}
                value={this.state.country}
                placeholder="Select an option"
              />
            </>
          )}

          {this.filterArr.includes("sector") && (
            <>
              <h4>Sector</h4>

              <Dropdown
                options={this.sector}
                onChange={this.handleChangeSector}
                value={this.state.sector}
                placeholder="Select an option"
              />
            </>
          )}
        </div>
      </div>
    );
  }
}
