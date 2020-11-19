import React from "react";
import Column from "./Column";
import styled from "styled-components";

import { connect } from 'react-redux';

const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 18px;
  background: white;
  border: 1px solid black;
  margin-bottom: 10px;
  border-radius: 10px;
  padding: 10px;
`;

class Row extends React.Component {
  render() {
    return (
      <RowWrapper>
        {this.props.rows[this.props.row_id].columnsOrder.map((columnId, index) => {
          return (
            <Column
              key={columnId}
              column_id={columnId}
            />
          );
        })}
      </RowWrapper>
    );
  }
}

const mapStoreToProps = (state) => (state);

export default connect(mapStoreToProps)(Row);
