import React from "react";
import { connect } from "react-redux";

import { DragDropContext } from "react-beautiful-dnd";

import Row from "./Row";
import styled from "styled-components";

import { moveTask } from '../redux/actions/crudActions';

const KanbanWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

class Kanban extends React.Component {

  getRowIdByColumnId = columnId => {
    for (let rowId in this.state.rows) {
      if (this.state.rows[rowId].columns[columnId]) {
        return rowId;
      }
    }
    return undefined;
  };

  onDragEnd = result => {
    const { destination, source, draggableId } = result;

    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    
    this.props.dispatch(moveTask({
      task: draggableId,
      column: destination.droppableId,
      index: destination.index
    }))
  }

  render() {
    return (
      <DragDropContext
        onDragEnd={this.onDragEnd}
      >
        <KanbanWrapper>
          {this.props.rowsOrder.map((rowId, index) => {
            const titled = index === 0;
            return (
              <Row
                row_id={rowId}
                titled={titled}
                key={rowId}
                row={this.props.rows[rowId]}
              />
            );
          })}
        </KanbanWrapper>
      </DragDropContext >
    );
  }
}

const mapStoreToProps = (state) => (state);

export default connect(mapStoreToProps)(Kanban);
