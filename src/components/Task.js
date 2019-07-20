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

const TaskText = styled.div``;

class Task extends React.Component {
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

export default connect(mapStoreToProps)(Task);
