import React from "react";
import { connect } from 'react-redux';
import { addTask } from '../redux/actions/crudActions';
import styled from 'styled-components';
import shortid from 'shortid';

const AddFormWrapper = styled.div`
    position: relative;
`;

const TaskWrapper = styled.div`
  margin: 3px;
  position: absolute;
  left: 20px;
  top: 20px;
  z-index: 10;
  min-width: 150px;
  border: 1px solid gray;
  border-radius: 5px;
  background: white;
  padding: 10px;
  display: ${props => (props.show === true ? `flex` : `none`)};
  flex-direction: column;
`;


class TaskAddForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            task : {},
            column_id : "",
            show : false
        }
    }

    addTask = () => {
        this.props.addTask({
          task: 'task_' + shortid.generate(),
          column: this.props.column_id,
          title: document.getElementById(this.props.column_id + "-add_form-title").value,
          text: document.getElementById(this.props.column_id + "-add_form-description").value
        });
        this.emptyForm();
        this.toggleShowing();
      }

    toggleShowing = () => {
        console.log('display = ' + this.state.show.toString());
        this.setState({
            ...this.state,
            show: !this.state.show
        });
    }

    emptyForm = () => {
        document.getElementById(this.props.column_id + "-add_form-title").value = '';
        document.getElementById(this.props.column_id + "-add_form-description").value = '';
    }

    render() {
        return (
            <AddFormWrapper>
                <input type='button' value='+' onClick={this.toggleShowing}/>
                <TaskWrapper show={this.state.show}>
                    <div>
                        <input id={this.props.column_id + "-add_form-title"} placeholder='title' type='text' name='title' value={this.state.task.title} />
                        <br/>
                        <textarea cols='30' rows='5' id={this.props.column_id + "-add_form-description"} placeholder='description' type='text' name="description" value={this.state.task.description} />
                        <br/>
                        <input type="button" value='add task' onClick={this.addTask} />
                    </div>
                </TaskWrapper>
            </AddFormWrapper>
        )
    }
}

const mapStoreToProps = (state) => (state);

const mapDispatchToProps = {
    addTask
}

export default connect(mapStoreToProps, mapDispatchToProps)(TaskAddForm);