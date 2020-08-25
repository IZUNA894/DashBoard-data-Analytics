import React, { Component } from "react";
import { scaleLinear } from "d3-scale";
import Data from "../jsondata.json";
import Styles from "./graph.module.css";
import {
  XYPlot,
  XAxis,
  YAxis,
  HeatmapSeries,
  LabelSeries,
  Hint,
} from "react-vis";

const mydata = (props) => {
  let countries = [];
  let topics = [];
  let max = 0;
  let min = 3000;
  for (const el of Data) {
    if (el.end_year != "" && el.end_year > max) max = el.end_year;
    if (el.end_year != "" && el.end_year < min) min = el.end_year;
    if (el.end_year >= props.yearStart && el.end_year <= props.yearEnd)
      countries.push(el.country);
    topics.push(el.topic);
  }
  console.log(max, min);
  // let countries = Data.map((obj) => obj.country);
  // let topics = Data.map((obj) => obj.topic);

  // 1.filtering data first according to needs
  // let filteredData = Data.filter((el)=>{

  // })
  let arr1 = [];
  for (const el of countries) {
    if (el.length == 0) continue;
    if (!arr1.includes(el)) arr1.push(el);
  }
  countries = arr1.sort();
  arr1 = [];
  for (const el of topics) {
    if (el.length == 0) continue;
    if (!arr1.includes(el)) arr1.push(el);
  }
  topics = arr1.sort();

  let data = countries.reduce((acc, country, idx) => {
    return acc.concat(
      topics.map((topic, jdx) => {
        let x = Data.find((obj) => {
          if (country == obj.country && topic == obj.topic) return true;
        });
        return {
          x: `${country}`,
          y: `${topic}`,
          color: x ? x.intensity : 0,
          ...x,
        };
      })
    );
  }, []);

  return { countries, topics, data };
};

export default class LabeledHeatmap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: false,
      point: undefined,
    };
  }

  handleClick = (point, e) => {
    if (point.color == 0) return;
    console.log(point, e);
    this.state.point = point;
    this.props.addPoint(point);
  };
  hanleHover = (point, e) => {
    if (point.color == 0) return;

    console.log(point, e);
  };
  render() {
    let { countries, topics, data } = mydata(this.props);
    console.log(data);
    const { value } = this.state;

    return (
      <div className="card " style={{ overflow: "scroll" }}>
        <div className={`card-body ${Styles.cCardBody}`}>
          <XYPlot
            xType="ordinal"
            xDomain={countries}
            yType="ordinal"
            yDomain={topics.reverse()}
            margin={150}
            width={1500}
            height={1500}
          >
            <XAxis
              orientation="top"
              tickLabelAngle={-60}
              style={{
                line: { stroke: "black" },
                ticks: { stroke: "black" },
                text: { stroke: "none", fill: "#6b6b76", fontWeight: 600 },
              }}
            />
            <YAxis />
            <HeatmapSeries
              colorType="linear"
              colorRange="linear"
              colorDomain={[0, 1, 10]}
              colorRange={["white", "red", "green"]}
              getColor={(d) => d.color}
              style={{
                stroke: "white",
                strokeWidth: "2px",
                rectStyle: {
                  rx: 0,
                  ry: 0,
                },
              }}
              className="heatmap-series-example"
              data={data}
              onValueClick={this.handleClick}
              onValueMouseOver={this.hanleHover}
            />

            {value !== false && <Hint value={value} />}
          </XYPlot>
        </div>
      </div>
    );
  }
}
