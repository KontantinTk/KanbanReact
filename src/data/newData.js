const newData = {
    rows: {
        'row_0':{
            columnsOrder: ['column_0', 'column_1', 'column_2']
        },
        'row_1':{
            columnsOrder: ['column_3']
        }
    },
    columns: {
        'column_0': {
            row: 'row_0',
            tasksOrder: ['task_0']
        },
        'column_1': {
            row: 'row_0',
            tasksOrder: ['task_1']
        },
        'column_2': {
            row: 'row_0',
            tasksOrder: []
        },
        'column_3': {
            row: 'row_1',
            tasksOrder: []
        }
    },
    tasks: {
        task_0: {
            column: 'column_0',
            title: 'Task 1',
            text: 'Text 1'
        },
        task_1: {
            column: 'column_1',
            title: 'Task 2',
            text: 'Text 2'
        },
    },
    rowsOrder: ['row_0', 'row_1']
}

export default newData;