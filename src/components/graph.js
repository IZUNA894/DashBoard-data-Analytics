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

const cleanData = (props) => {
  let {
    hAxis,
    vAxis,
    measure,
    topicF,
    sectorF,
    countryF,
    regionF,
    pestleF,
  } = props;
  let cleanedData = Data.filter((el) => {
    if (
      el[hAxis] &&
      el[hAxis] !== "" &&
      el[vAxis] &&
      el[vAxis] !== "" &&
      el[measure] != "" &&
      el[measure]
    )
      return true;
  });

  // cleanedData = cleanedData.filter((el) => {
  //   console.log("exec topic filter");
  //   if (filters.topic === "All") return true;
  //   if (filters.topic === el.topic) return true;
  // });
  // console.log(cleanedData.length);

  return cleanedData;
};
export { cleanData };

const filterData = (props, cleanedData) => {
  let { topicF, sectorF, countryF, regionF, pestleF } = props;

  cleanedData = cleanedData
    .filter((el) => {
      if (topicF === "All") return true;
      if (topicF === el.topic) return true;
    })
    .filter((el) => {
      if (regionF === "All") return true;
      if (regionF === el.region) return true;
    })
    .filter((el) => {
      if (countryF === "All") return true;
      if (countryF === el.country) return true;
    })
    .filter((el) => {
      if (sectorF === "All") return true;
      if (sectorF === el.sector) return true;
    })
    .filter((el) => {
      if (pestleF === "All") return true;
      if (pestleF === el.pestle) return true;
    });

  return cleanedData;
};
export { filterData };

const mydata = (props) => {
  let xLables = [];
  let yLables = [];
  let max = 0;
  let min = 3000;
  let { hAxis, vAxis, measure } = props;

  // 1.cleaning data first according to needs
  let cleanedData = cleanData(props);
  //end of cleaning..........

  cleanedData = filterData(props, cleanedData);

  console.log("cleanedData");
  console.log(cleanedData);
  //2.making axis labels
  for (const el of cleanedData) {
    let d = new Date(el.added);

    if (
      d.getFullYear() >= props.yearStart &&
      d.getFullYear() <= props.yearEnd
    ) {
      xLables.push(el[hAxis]);
      yLables.push(el[vAxis]);
    }
  }

  // xLables = xLables.slice(0, 3);
  // yLables = yLables.slice(0, 3);

  //3.removing and sorting blank axis labels
  let arr1 = [];
  for (const el of xLables) {
    if (el.length == 0) continue;
    if (!arr1.includes(el)) arr1.push(el);
  }
  xLables = arr1.sort();
  console.log(xLables);
  arr1 = [];
  for (const el of yLables) {
    if (el.length == 0) continue;
    if (!arr1.includes(el)) arr1.push(el);
  }
  yLables = arr1.sort();
  console.log(yLables);
  let data = xLables.reduce((acc, xLable, idx) => {
    return acc.concat(
      yLables.map((yLable, jdx) => {
        let x = cleanedData.find((obj) => {
          if (xLable == obj[hAxis] && yLable == obj[vAxis]) return true;
        });
        return {
          x: `${xLable}`,
          y: `${yLable}`,
          value: x ? x[measure] : 0,
          ...x,
        };
      })
    );
  }, []);

  return { xLables, yLables, data };
};

function calcHeight(xLabels) {
  return xLabels.reduce((max, el) => {
    if (el.length > max) return el.length;
    else return max;
  }, 0);
}
export default class LabeledHeatmap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: false,
      point: undefined,
    };
  }

  handleClick = (point, e) => {
    if (point.value == 0) return;
    this.state.point = point;
    this.props.addPoint(point);
  };
  hanleHover = (point, e) => {
    if (point.value == 0) return;
  };
  // setColor = (d) => {
  //   if (d.value == 0) return "white";
  //   if (d.value >= 2 * portion) return "#bf360c";
  //   if (d.value >= 1 * portion) return "#64dd17";
  //   else return "#90caf9";
  // };
  render() {
    let myData = [];
    let { xLables, yLables, data } = mydata(this.props);
    console.log(data);
    myData = data;

    let maxValue = 0;
    let minValue = 10000;
    for (const el of data) {
      if (el.value > maxValue) maxValue = el.value;
      if (el.value < minValue && el.value !== 0) minValue = el.value;
    }
    this.maxValue = maxValue;
    let portion = (1 / 3) * maxValue;
    console.log(maxValue, minValue);

    const { value } = this.state;
    let width =
      xLables.length * 50 + calcHeight(yLables) * 20 > 350
        ? xLables.length * 50 + calcHeight(yLables) * 20
        : xLables.length * 50 + 350;
    let height =
      yLables.length * 20 + calcHeight(xLables) * 15 > 350
        ? yLables.length * 20 + calcHeight(xLables) * 15
        : yLables.length * 20 + 350;
    // let width = 350
    // let height = 350;
    return (
      <div className="card " style={{ overflow: "scroll" }}>
        <div className={`card-body ${Styles.cCardBody}`}>
          <div className="responsive-vis">
            <XYPlot
              xType="ordinal"
              xDomain={xLables}
              yType="ordinal"
              yDomain={yLables}
              margin={150}
              width={width}
              height={height}
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
              <YAxis
                orientation="left"
                style={{
                  line: { stroke: "black" },
                  ticks: { stroke: "black" },
                  text: { stroke: "none", fill: "#6b6b76", fontWeight: 600 },
                }}
              />
              <HeatmapSeries
                colorType="linear"
                colorDomain={[0, minValue, maxValue]}
                colorRange={["white", "#90caf9", "#64dd17", "#bf360c"]}
                getColor={(d) => d.value}
                style={{
                  stroke: "white",
                  strokeWidth: "2px",
                  rectStyle: {
                    rx: 0,
                    ry: 0,
                  },
                }}
                className="responsive-vis-heatmap"
                data={myData}
                onValueClick={this.handleClick}
                onValueMouseOver={this.hanleHover}
              />
            </XYPlot>
          </div>
        </div>
      </div>
    );
  }
}
