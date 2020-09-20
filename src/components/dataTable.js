import React, { Component } from "react";
import { cleanData, filterData } from "./graph";
import DataTable from "react-data-table-component";

import Icon1 from "@material-ui/icons/Search";
import TextField from "@material-ui/core/TextField";

const columns = [
  {
    name: "Title",
    selector: "title",
    sortable: true,
    maxWidth: "840px",
  },
  {
    name: "Topic",
    selector: "topic",
    sortable: true,
    maxWidth: "100px",
  },
  {
    name: "Year",
    selector: "end_year",
    sortable: true,
    maxWidth: "50px",
  },
  {
    name: "Intensity",
    selector: "intensity",
    sortable: true,
    maxWidth: "10px",
  },
  {
    name: "Sector",
    selector: "sector",
    sortable: true,
    maxWidth: "100px",
  },
  {
    name: "Region",
    selector: "region",
    sortable: true,
    maxWidth: "100px",
  },
  {
    name: "Pestle",
    selector: "pestle",
    sortable: true,
    maxWidth: "100px",
  },
];

export default class dataTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pagination: true,
      highlight: true,
      striped: true,
      pointer: true,
      subHeader: true,
      subHeaderAlign: "right",
    };
    this.data = [];
  }
  getData = () => {
    this.data = cleanData(this.props);
    this.data = filterData(this.props, this.data);
  };
  render() {
    this.getData();
    return (
      <div className="card" style={{ marginBottom: "10px" }}>
        <div className="card-body">
          <DataTable
            columns={columns}
            data={this.data}
            defaultSortField="title"
            pagination={this.state.pagination}
            highlightOnHover={this.state.highlight}
            striped={this.state.striped}
            pointerOnHover={this.state.pointer}
            subHeader={this.state.subHeader}
            noHeader={true}
            subHeaderComponent={
              <div style={{ display: "flex", alignItems: "center" }}>
                <TextField
                  id="outlined-basic"
                  label="Search"
                  variant="outlined"
                  size="small"
                  style={{ margin: "5px" }}
                />
                <Icon1 style={{ margin: "5px" }} color="action" />
              </div>
            }
            subHeaderAlign={this.state.subHeaderAlign}
          />
        </div>
      </div>
    );
  }
}
