const types = {
    ADD_TASK: 'ADD_TASK',
    DEL_TASK: 'DEL_TASK',
    MOVE_TASK: 'MOVE_TASK'
}

const addTask = (task) => {
    return {
        type: types.ADD_TASK,
        row: task.row,
        col: task.col,
        index: task.index,
        title: task.title,
        text: task.text
    }
}

export { types, addTask };