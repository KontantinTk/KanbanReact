enum ActionTypes {
    ADD_TASK = 'ADD_TASK',
    DEL_TASK = 'DEL_TASK',
    MOVE_TASK = 'MOVE_TASK',

    ADD_COLUMN = 'ADD_COLUMN'
}

interface AddTaskData {
    column: string,
    task: string,
    title: string,
    text: string,
}

interface MoveTaskData {
    task: string,
    column: string,
    index: number
}

interface DelTaskData {
    task: string,
}

interface AddColumnData {

}

interface Action {
    type: ActionTypes
}

const addTask = (data: AddTaskData): AddTaskData & Action => {
    return {
        type: ActionTypes.ADD_TASK,
        column: data.column,
        task: data.task,
        title: data.title,
        text: data.text
    }
}

const moveTask = (data: MoveTaskData): MoveTaskData & Action => {
    return {
        type: ActionTypes.MOVE_TASK,
        task: data.task,
        column: data.column,
        index: data.index
    }
}

const delTask = (data: DelTaskData): DelTaskData & Action => {
    return {
        type: ActionTypes.DEL_TASK,
        task: data.task,
    }
}

const addColumn = (data: AddColumnData): AddColumnData & Action => {
    return {
        type: ActionTypes.ADD_COLUMN,
    }
}


export { ActionTypes };
export { addTask, moveTask, delTask, addColumn };