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

const AddTaskButton = styled.button`
  width: 100%;
  background: lime;
  border: none;
  font-size: 14px;
  font-weight: 700;
  border-radius: 5px;
`;

class Column extends React.Component {

  // addTask = () => {
  //   const taskData = {
  //     row: 0,
  //     col: 0,
  //     index: 123,
  //     title: "Test task",
  //     text: "some text"
  //   }

  //   this.props.dispatch(addTask(taskData));
  //   this.forceUpdate();
  // }

  render() {
    const col = this.props.column;
    return (
      <Droppable droppableId={col.id}>
        {provided => {
          return (
            <ColumnWrapper ref={provided.innerRef} {...provided.droppableProps}>
              <AddTaskButton onClick={() => {
                this.props.addTask({
                  row: 0,
                  col: 0,
                  index: 123,
                  title: "Test task",
                  text: "some text"
                });
              }}>+ task</AddTaskButton>
              {col.tasksOrder.map((taskId, index) => {
                return (
                  <Task task={col.tasks[taskId]} key={taskId} index={index} />
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

const mapDispatchToProps = {
  addTask
}

export default connect(null, mapDispatchToProps)(Column);
