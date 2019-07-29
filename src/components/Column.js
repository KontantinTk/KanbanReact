import React from "react";
import { Droppable } from "react-beautiful-dnd";
import Task from "./Task";
import styled from "styled-components";

import { connect } from "react-redux";

import { addTask } from '../redux/actions/crudActions';

import shortid from 'shortid';

import TaskAddForm from './TaskAddForm';

const ColumnDroppableArea = styled.div`
  overflow-x: hidden;
  overflow-y: visible;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-content: flex-start;
`;

const ColumnWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

class Column extends React.Component {

  addTask = () => {
    this.props.addTask({
      task: 'task_' + shortid.generate(),
      column: this.props.column_id,
      title: 'Test task',
      text: 'Test text'
    });
  }

  render() {
    return (
      <Droppable droppableId={this.props.column_id}>
        {provided => {
          return (
            <ColumnWrapper>
                <TaskAddForm column_id={this.props.column_id}></TaskAddForm>
              <ColumnDroppableArea ref={provided.innerRef} {...provided.droppableProps}>
                {this.props.columns[this.props.column_id].tasksOrder.map((taskId, index) => {
                  return (
                    <Task key={taskId} task_id={taskId} index={index} />
                  );
                })}
                {provided.placeholder}
              </ColumnDroppableArea>
            </ColumnWrapper>
          );
        }}
      </Droppable >
    );
  }
}

const mapStoreToProps = (state) => (state);

const mapDispatchToProps = {
  addTask
}

export default connect(mapStoreToProps, mapDispatchToProps)(Column);
