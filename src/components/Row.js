import React from "react";
import Column from "./Column";

import { connect } from 'react-redux';
import {addColumn, addTask} from "../redux/actions/crudActions";

class Row extends React.Component {

  addColumn = () => {
    this.props.addColumn({});
  }

  render() {
    return (
      <div className="row-wrapper">
        <button onClick={this.addColumn}>add column</button>
        {this.props.rows[this.props.row_id].columnsOrder.map((columnId, index) => {
          return (
            <Column
              key={columnId}
              column_id={columnId}
            />
          );
        })}
      </div>
    );
  }
}

const mapStoreToProps = (state) => (state);

const mapDispatchToProps = {
  addColumn
}

export default connect(mapStoreToProps, mapDispatchToProps)(Row);
