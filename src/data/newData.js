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
            columnsOrder: ['column_0', 'column_1', 'column_2', 'column_4']
        },
    },
    columns: {
        'column_0': {
            row: 'row_0',
            tasksOrder: ['task_0', 'task_2']
        },
        'column_1': {
            row: 'row_0',
            tasksOrder: ['task_1']
        },
        'column_2': {
            row: 'row_0',
            tasksOrder: []
        },
        'column_4': {
            row: 'row_0',
            tasksOrder: []
        }
    },
    tasks: {
        task_0: {
            column: 'column_0',
            title: 'Task 1',
            text: 'Text 1',
            color: getRandomColor()
        },
        task_1: {
            column: 'column_1',
            title: 'Task 2',
            text: 'Text 2',
            color: getRandomColor()
        },
        task_2: {
            column: 'column_0',
            title: chance.sentence({words: 2}),
            text: chance.sentence({words: 20}),
            color: getRandomColor()
        },
    },
    rowsOrder: ['row_0']
}

export default newData;