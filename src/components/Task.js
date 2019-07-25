import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";
import { connect } from 'react-redux';

import {delTask} from '../redux/actions/crudActions';

const TaskWrapper = styled.div`
  margin: 3px;
  position: relative;
  min-width: 150px;
  border: 1px solid gray;
  border-radius: 5px;
  background: white;
  padding: 10px;
`;

const TaskTitle = styled.div`
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 10px;
`;

const TaskText = styled.div``;

class Task extends React.Component {

  delTask = () => {
    this.props.delTask({task:this.props.task_id})
  }

  render() {
    return (
      <Draggable key={this.props.task_id} draggableId={this.props.task_id} index={this.props.index}>
        {provided => {
          return (
            <React.Fragment>
              <TaskWrapper
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
              >
                <TaskTitle>{this.props.tasks[this.props.task_id].title}</TaskTitle>
                <TaskText>{this.props.tasks[this.props.task_id].text}</TaskText>
                <button onClick={this.delTask}>Delete task</button>
              </TaskWrapper>
              {provided.placeholder}
            </React.Fragment>
          );
        }}
      </Draggable>
    );
  }
}

const mapStoreToProps = (state) => (state);

const mapDispatchToProps = {
  delTask
}

export default connect(mapStoreToProps, mapDispatchToProps)(Task);
