import newData from '../../data/newData';
import { types } from '../actions/crudActions';

const defaultState = newData;

const rootReducer = (state = defaultState, action) => {
    console.log(action);
    switch (action.type) {
        case types.ADD_TASK:
            return {
                ...state,
                tasks: {
                    ...state.tasks,
                    ['task_'+action.id]: {
                        title: action.title,
                        text: action.text
                    }
                },
                columns: {
                    ...state.columns,
                    ['column_'+action.column]: {
                        tasksOrder: [
                            'task_'+action.id,
                            ...state.columns['column_'+action.column].tasksOrder
                        ]
                    }
                }
            }
        default:
            return state;
    }
}

export default rootReducer;