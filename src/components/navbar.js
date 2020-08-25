import React, { Component } from "react";
import Styles from "./navbar.module.css";

export default class navbar extends Component {
  render() {
    return (
      <>
        <div
          className="navbar navbar-expand-lg navbar-light "
          style={{ padding: 0, marginTop: "0px" }}
        >
          <ul className="nav navbar-nav navbar-btn navbar-link">
            <li className="">
              <h3 className={`${Styles.logo}`}>Heatmap</h3>
            </li>
          </ul>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="nav navbar-nav navbar-right navbar-btn navbar-link ml-auto">
              <li className="">
                <a className={`${Styles.cLink}`} href="javascript:void(0)">
                  <button className={`${Styles.cBtn}`}>Heat View</button>
                  <span
                    className="glyphicon glyphicon-fire"
                    style={{ paddingLeft: "2px" }}
                  ></span>
                </a>
              </li>
              <li className="">
                <a className={`${Styles.cLink}`} href="javascript:void(0)">
                  <button className={`${Styles.cBtn}`}>Cross Impact</button>
                  <span
                    className="glyphicon glyphicon-fire"
                    style={{ paddingLeft: "2px" }}
                  ></span>
                </a>
              </li>
              <li className="">
                <a className={`${Styles.cLink}`} href="javascript:void(0)">
                  <button className={`${Styles.cBtn}`}>Quick Guide</button>
                  <span
                    className="glyphicon glyphicon-fire"
                    style={{ paddingLeft: "2px" }}
                  ></span>
                </a>
              </li>
              <li className="">
                <a className={`${Styles.cLink}`} href="javascript:void(0)">
                  <button className={`${Styles.cBtn}`}>FeedBack</button>
                  <span
                    className="glyphicon glyphicon-fire"
                    style={{ paddingLeft: "2px" }}
                  ></span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  }
}
