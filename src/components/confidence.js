import React, { Component } from "react";

export default class confidence extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: undefined,
    };
  }
  handleOptionChange = (e) => {
    this.setState({
      selectedOption: e.target.value,
    });
  };
  render() {
    return (
      <div className="card" style={{ marginTop: "10px", marginBottom: "10px" }}>
        <div className="card-body" style={{ paddingTop: "5px" }}>
          <h5
            style={{
              fontSize: "15px",
              fontWeight: "600",
              lineHeight: "16px",
              marginBottom: "5px!important",
            }}
          >
            Confidence
          </h5>

          <form>
            <div className="radio">
              <label>
                <input
                  type="radio"
                  value="90%"
                  checked={this.state.selectedOption === "90%"}
                  onChange={this.handleOptionChange}
                />
                90%
              </label>
            </div>
            <div className="radio">
              <label>
                <input
                  type="radio"
                  value="95%"
                  checked={this.state.selectedOption === "95%"}
                  onChange={this.handleOptionChange}
                />
                95%
              </label>
            </div>
            <div className="radio">
              <label>
                <input
                  type="radio"
                  value="99%"
                  checked={this.state.selectedOption === "99%"}
                  onChange={this.handleOptionChange}
                />
                99%
              </label>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
