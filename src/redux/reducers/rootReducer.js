import testDataChance from '../../data/testData';
import { types } from '../actions/crudActions';

const defaultState = testDataChance;

const rootReducer = (state = defaultState, action) => {

    const col_id = 'col_'+action.col;
    const row_id = 'row_'+action.row;
    const task_id = 'task_'+action.index;

    switch (action.type) {
        case types.ADD_TASK:
            return {
                ...state,
                rows:{
                    ...state.rows,
                    [row_id]: {
                        ...state.rows[row_id],
                        columns:{
                            ...state.rows[row_id].columns,
                            [col_id]: {
                                ...state.rows[row_id].columns[col_id],
                                tasks:{
                                    ...state.rows[row_id].columns[col_id].tasks,
                                    [task_id]:{
                                        id: task_id,
                                        title: action.title,
                                        description: action.text
                                    },
                                    // 'task_0': undefined
                                },
                                tasksOrder:[
                                    task_id,
                                    ...state.rows[row_id].columns[col_id].tasksOrder
                                    // ...state.rows[row_id].columns[col_id].tasksOrder.filter(del_task_id => del_task_id !== 'task_0'),
                                ]
                            }
                        }
                    }
                }
            }
        default:
            return state;
    }
}

export default rootReducer;