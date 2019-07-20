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
        id: data.id,
        title: data.title,
        text: data.text
    }
}

export { types, addTask };