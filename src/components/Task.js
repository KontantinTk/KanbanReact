import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { connect } from 'react-redux';

import {delTask} from '../redux/actions/crudActions';

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
              <div
                className="task-wrapper"
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                color={this.props.tasks[this.props.task_id].color}
              >
                <button onClick={this.delTask}>del</button>
                <h3>{this.props.tasks[this.props.task_id].title}</h3>
                <p>{this.props.tasks[this.props.task_id].text}</p>
              </div>
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
