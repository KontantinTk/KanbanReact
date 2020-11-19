import React from "react";
import Column from "./Column";

import { connect } from 'react-redux';

class Row extends React.Component {
  render() {
    return (
      <div className="row-wrapper">
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

export default connect(mapStoreToProps)(Row);
