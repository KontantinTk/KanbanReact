import { Chance } from "chance";

const chance = new Chance();

const taskColors = [
    // yellowish: 
    '#FFED70', 
    // redish: 
    '#F09072', 
    // pupleish: 
    '#CF96FF', 
    // blueish: 
    '#7DDBE8', 
    // greenish: 
    '#BEFF8A'
  ];
  
  const getRandomColor = () => {
    const randomIndex = Math.round(Math.random() * taskColors.length);
    console.log(randomIndex);
    return taskColors[randomIndex];
  }

const newData = {
    rows: {
        'row_0':{
            columnsOrder: ['column_00', 'column_01', 'column_02', 'column_03']
        },
        'row_1':{
            columnsOrder: ['column_10', 'column_11', 'column_12', 'column_13']
        },
    },
    columns: {
        'column_00': {
            row: 'row_0',
            tasksOrder: ['task_0']
        },
        'column_01': {
            row: 'row_0',
            tasksOrder: ['task_1']
        },
        'column_02': {
            row: 'row_0',
            tasksOrder: []
        },
        'column_03': {
            row: 'row_0',
            tasksOrder: []
        },
        'column_10': {
            row: 'row_0',
            tasksOrder: []
        },
        'column_11': {
            row: 'row_0',
            tasksOrder: ['task_2', 'task_3', 'task_4']
        },
        'column_12': {
            row: 'row_0',
            tasksOrder: []
        },
        'column_13': {
            row: 'row_0',
            tasksOrder: []
        },
    },
    tasks: {
        task_0: {
            column: 'column_00',
            title: 'Task 1',
            text: 'Text 1',
            color: getRandomColor()
        },
        task_1: {
            column: 'column_01',
            title: 'Task 2',
            text: 'Text 2',
            color: getRandomColor()
        },
        task_2: {
            column: 'column_11',
            title: chance.sentence({words: 2}),
            text: chance.sentence({words: 20}),
            color: getRandomColor()
        },
        task_3: {
            column: 'column_11',
            title: chance.sentence({words: 2}),
            text: chance.sentence({words: 20}),
            color: getRandomColor()
        },
        task_4: {
            column: 'column_11',
            title: chance.sentence({words: 2}),
            text: chance.sentence({words: 20}),
            color: getRandomColor()
        },
    },
    rowsOrder: ['row_0', 'row_1']
}

export default newData;