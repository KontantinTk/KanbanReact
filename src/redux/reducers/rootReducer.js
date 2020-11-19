import newData from '../../data/newData';
import { ActionTypes } from '../actions/crudActions';

const defaultState = newData;

const rootReducer = (state = defaultState, action) => {
    let column = undefined;
    let task = undefined;

    switch (action.type) {
        case ActionTypes.ADD_TASK:

            if (state.tasks[action.task]) return state;

            return {
                ...state,
                tasks: {
                    ...state.tasks,
                    [action.task]: {
                        column: action.column,
                        title: action.title,
                        text: action.text,
                    }
                },
                columns: {
                    ...state.columns,
                    [action.column]: {
                        tasksOrder: [
                            action.task,
                            ...state.columns[action.column].tasksOrder
                        ]
                    }
                }
            }
        case ActionTypes.MOVE_TASK:

            if (!state.tasks[action.task]) return state;

            const old_column = state.tasks[action.task].column;
            column = action.column;

            let new_task_order = state.columns[column].tasksOrder;

            if (old_column === column) {
                new_task_order = new_task_order.filter(
                    task => task !== action.task
                );
                new_task_order.splice(action.index, 0, action.task);

                return {
                    ...state,
                    columns: {
                        ...state.columns,
                        [column]: {
                            ...state.columns[column],
                            tasksOrder: new_task_order
                        }
                    }
                }
            } else {

                new_task_order.splice(action.index, 0, action.task);

                return {
                    ...state,
                    tasks: {
                        ...state.tasks,
                        [action.task]: {
                            ...state.tasks[action.task],
                            column: column
                        }
                    },
                    columns: {
                        ...state.columns,
                        [old_column]: {
                            ...state.columns[old_column],
                            tasksOrder: state.columns[old_column].tasksOrder.filter(
                                task => task !== action.task
                            )
                        },
                        [column]: {
                            ...state.columns[column],
                            tasksOrder: new_task_order
                        }
                    }
                }
            }
        case ActionTypes.DEL_TASK:

            if (!state.tasks[action.task]) return state;

            task = action.task;
            column = state.tasks[task].column;

            return {
                ...state,
                columns: {
                    ...state.columns,
                    [column]: {
                        ...state.columns[column],
                        tasksOrder: state.columns[column].tasksOrder.filter(
                            task_key => task_key !== task
                        )
                    }
                },
                tasks: {
                    ...state.tasks,
                    [task]: undefined
                }
            }
        case ActionTypes.ADD_COLUMN:
            if (state.tasks[action.task]) return state;

            let randInt = Math.round(1000 * Math.random());
            let columnId = 'column_' + randInt;


            return {
                ...state,
                columns: {
                    ...state.columns,
                    [columnId]: {
                        row: 'row_0',
                        tasksOrder: []
                    }
                },
                rows: {
                    'row_0': {
                        columnsOrder: [...state.rows['row_0'].columnsOrder, columnId]
                    }
                }
            }
        default:
            return state;
    }
}

export default rootReducer;