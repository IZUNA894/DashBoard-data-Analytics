import React, { Component } from "react";
import { cleanData, filterData } from "./graph";
import { relevance, likelihood } from "./../mappings";

export default class tiles extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.data = [];
  }
  getData = () => {
    this.data = cleanData(this.props);
    this.data = filterData(this.props, this.data);
  };
  doSort = () => {
    let arr = this.data;

    arr.sort(function (a, b) {
      return b.intensity - a.intensity;
    });

    //removing duplicates entry
    let arr1 = [];
    for (const el of arr) {
      if (
        arr1.findIndex((x) => {
          if (x.country === el.country) return true;
        }) == -1
      )
        arr1.push(el);
    }
    this.data = arr1;
  };
  render() {
    this.getData();
    this.doSort();
    let Content1 = this.data.slice(0, 3).map((el, i) => {
      let clr = "";
      if (i == 0) clr = "#71b6f9";
      if (i == 1) clr = "#ff8acc";
      if (i == 2) clr = "#f9c851";
      return (
        <div className="col-sm-4" style={{ padding: "5px" }} key={i}>
          <a href={el.url} style={{ textDecoration: "none" }}>
            <div className="card" style={{ minHeight: "112px" }}>
              <div className="card-body">
                <div className="text-center">
                  <h4 style={{ margin: "5px 0 ", color: clr }}>{el.country}</h4>

                  <h5 style={{ margin: "5px 0", color: "#505458" }}>
                    {el.intensity.toFixed(2)} | {relevance[el.relevance - 1]} |{" "}
                    {likelihood[el.likelihood - 1]} | {el.end_year}
                  </h5>
                </div>
              </div>
            </div>
          </a>
        </div>
      );
    });
    let Content2 = this.data.slice(3, 5).map((el, i) => {
      let clr = "#5b8e0";

      return (
        <div className="col-sm-6" style={{ padding: "5px" }} key={i}>
          <a href={el.url} style={{ textDecoration: "none" }}>
            <div className="card" style={{ minHeight: "112px" }}>
              <div className="card-body">
                <div className="text-center">
                  <h4 style={{ margin: "5px 0 ", color: clr }}>{el.country}</h4>

                  <h5 style={{ margin: "5px 0", color: "#505458" }}>
                    {el.intensity.toFixed(2)} | {relevance[el.relevance - 1]} |{" "}
                    {likelihood[el.likelihood - 1]} | {el.end_year}
                  </h5>
                </div>
              </div>
            </div>
          </a>
        </div>
      );
    });
    let Content3 = this.data.slice(5, 8).map((el, i) => {
      let clr = "";
      if (i == 0) clr = "#71b6f9";
      if (i == 1) clr = "#ff8acc";
      if (i == 2) clr = "#f9c851";
      return (
        <div className="col-sm-4" style={{ padding: "5px" }} key={i}>
          <a href={el.url} style={{ textDecoration: "none" }}>
            <div className="card" style={{ minHeight: "112px" }}>
              <div className="card-body">
                <div className="text-center">
                  <h4 style={{ margin: "5px 0 ", color: clr }}>{el.country}</h4>

                  <h5 style={{ margin: "5px 0", color: "#505458" }}>
                    {el.intensity.toFixed(2)} | {relevance[el.relevance - 1]} |{" "}
                    {likelihood[el.likelihood - 1]} | {el.end_year}
                  </h5>
                </div>
              </div>
            </div>
          </a>
        </div>
      );
    });

    let Content4 = this.data.slice(8, 10).map((el, i) => {
      let clr = "#5b8e0";

      return (
        <div className="col-sm-6" style={{ padding: "5px" }} key={i}>
          <a href={el.url} style={{ textDecoration: "none" }}>
            <div className="card" style={{ minHeight: "112px" }}>
              <div className="card-body">
                <div className="text-center">
                  <h4 style={{ margin: "5px 0 ", color: clr }}>{el.country}</h4>

                  <h5 style={{ margin: "5px 0", color: "#505458" }}>
                    {el.intensity.toFixed(2)} | {relevance[el.relevance - 1]} |{" "}
                    {likelihood[el.likelihood - 1]} | {el.end_year}
                  </h5>
                </div>
              </div>
            </div>
          </a>
        </div>
      );
    });

    // for (var i = 0; i < 5; i++) {
    //   Content += (
    //     <div className="col">
    //       <h5>Turkey</h5>
    //     </div>
    //   );
    // }
    return (
      <>
        <h5
          style={{
            fontSize: "18px",
            fontWeight: "600",
            lineHeight: "16px",
            fontFamily: "roboto,sans-serif",
            marginBottom: "5px!important",
            color: "#797979",
          }}
        >
          Top Ten Countries
        </h5>
        <br />
        <div
          className="row"
          style={{ margin: "0", padding: "10px 0px", width: "100%" }}
        >
          <div className="col-sm-7" style={{ padding: "0", margin: "0" }}>
            <div className="row" style={{ margin: "0", padding: "0" }}>
              {Content1}
            </div>
          </div>
          <div className="col-sm-5" style={{ padding: "0", margin: "0" }}>
            <div className="row" style={{ margin: "0", padding: "0" }}>
              {Content2}
            </div>
          </div>
        </div>
        <div
          className="row"
          style={{ margin: "0", padding: "15px 0px", width: "100%" }}
        >
          <div className="col-sm-7" style={{ padding: "0", margin: "0" }}>
            <div className="row" style={{ margin: "0", padding: "0" }}>
              {Content3}
            </div>
          </div>
          <div className="col-sm-5" style={{ padding: "0", margin: "0" }}>
            <div className="row" style={{ margin: "0", padding: "0" }}>
              {Content4}
            </div>
          </div>
        </div>
      </>
    );
  }
}
