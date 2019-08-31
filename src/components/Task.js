import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";
import { connect } from 'react-redux';

import {delTask} from '../redux/actions/crudActions';



const TaskWrapper = styled.div`
  position: relative;

  margin: 3px 10px 10px 3px;
  min-width: 150px;
  padding: 10px;

  background: ${(props) => props.color};
  box-shadow: 5px 5px 5px -4px lightgrey;
`;

const TaskTitle = styled.div`
  font: 18px sans-serif;
  font-weight: bold;
  margin-bottom: 10px;
`;

const TaskText = styled.div`
  font: 14px sans-serif;
  margin: 10px 0 10px 0;
`;

const DelTask = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  background: #F09072;
  border: none;
  border-radius: 5px;
`;

const TaskButtons = styled.div`
`;

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
                color={this.props.tasks[this.props.task_id].color}
              >
                <TaskTitle>{this.props.tasks[this.props.task_id].title}</TaskTitle>
                <DelTask onClick={this.delTask}>del</DelTask>
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

const mapDispatchToProps = {
  delTask
}

export default connect(mapStoreToProps, mapDispatchToProps)(Task);
