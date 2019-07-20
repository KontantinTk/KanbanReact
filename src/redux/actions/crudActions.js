const types = {
    ADD_TASK: 'ADD_TASK',
    DEL_TASK: 'DEL_TASK',
    MOVE_TASK: 'MOVE_TASK'
}

const addTask = (data) => {
    return {
        type: types.ADD_TASK,
        row: data.row,
        column: data.column,
        task: data.task,
        title: data.title,
        text: data.text
    }
}

const moveTask = (data) => {
    return {
        type: types.MOVE_TASK,
        task: data.task,
        column: data.column,
        index: data.index
    }
}

const delTask = (data) => {
    return {
        type: types.DEL_TASK,
        task: data.task,
    }
}

export { types, addTask, moveTask, delTask };