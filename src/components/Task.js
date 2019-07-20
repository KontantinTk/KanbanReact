import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";
import { connect } from 'react-redux';

const TaskWrapper = styled.div`
  padding: 10px;
  border: 1px solid black;
  border-radius: 5px;
  background: white;
  min-height: 80px;
  position: relative;
`;

const TaskTitle = styled.div`
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 10px;
`;

const Avatar = styled.img`
  position: absolute;
  right: 5px;
  top: 5px;
  width: 30px;
  height: 30px;
  border-radius: 5px;
`;

const TaskText = styled.div``;

class Task extends React.Component {
  render() {
    const task = this.props.task;
    const index = this.props.index;
    return (
      <Draggable key={task.id} draggableId={task.id} index={index}>
        {provided => {
          return (
            <React.Fragment>
              <TaskWrapper
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
              >
                <TaskTitle>{task.title}</TaskTitle>
                <TaskText>{task.description}</TaskText>
                <Avatar src={task.imgSrc} />
              </TaskWrapper>
              {provided.placeholder}
            </React.Fragment>
          );
        }}
      </Draggable>
    );
  }
}

export default Task;
