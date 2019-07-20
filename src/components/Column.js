import React from "react";
import { Droppable } from "react-beautiful-dnd";
import Task from "./Task";
import styled from "styled-components";

import { connect } from "react-redux";

import { addTask } from '../redux/actions/crudActions';

const ColumnWrapper = styled.div`
  overflow-x: hidden;
  overflow-y: scroll;
  width: 100%;
  height: 100%;
  border: 1px solid black;
`;

class Column extends React.Component {

  addTestTask = () => {
    this.props.dispatch(addTask({
      id: 2,
      row: 0,
      column: 2,
      title: 'Test task',
      text: 'Test text'
    }));
  }

  render() {
    return (
      <Droppable droppableId={this.props.column_id}>
        {provided => {
          return (
            <ColumnWrapper ref={provided.innerRef} {...provided.droppableProps}>
              <button onClick={this.addTestTask}>Add task</button>
              {this.props.columns[this.props.column_id].tasksOrder.map((taskId, index) => {
                return (
                  <Task key={taskId} task_id={taskId} index={index} />
                );
              })}
              {provided.placeholder}
            </ColumnWrapper>
          );
        }}
      </Droppable>
    );
  }
}

const mapStoreToProps = (state) => (state);

export default connect(mapStoreToProps)(Column);
