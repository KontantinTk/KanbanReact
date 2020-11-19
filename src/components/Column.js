import React from "react";
import {Droppable} from "react-beautiful-dnd";
import Task from "./Task";

import {connect} from "react-redux";

import {addTask} from '../redux/actions/crudActions';

import shortid from 'shortid';

import TaskAddForm from './TaskAddForm';

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
            <div className="column-wrapper">
                <TaskAddForm column_id={this.props.column_id}/>
                <Droppable droppableId={this.props.column_id} className="column-droppable-area" >
                    {provided => {
                        return (
                            <div
                                className="column-droppable-area"
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                            >
                                {this.props.columns[this.props.column_id].tasksOrder.map((taskId, index) => {
                                    return (
                                        <Task key={taskId} task_id={taskId} index={index}/>
                                    );
                                })}
                                {provided.placeholder}
                            </div>
                        );
                    }}
                </Droppable>
            </div>
        );
    }
}

const mapStoreToProps = (state) => (state);

const mapDispatchToProps = {
    addTask
}

export default connect(mapStoreToProps, mapDispatchToProps)(Column);
