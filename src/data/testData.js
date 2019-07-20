import { Chance } from "chance";

const chance = new Chance();

let rowIndex = 0;
let columnIndex = 0;
let taskIndex = 0;

const testDataChance = {
  title: "Kanban"
};

let rows = {};
let rowsOrder = [];
for (let i = 0; i < 1; i++) {
  const rowId = "row_" + rowIndex;

  let columns = {};
  let columnsOrder = [];
  for (let j = 0; j < 4; j++) {
    const columnId = "col_" + columnIndex;

    let tasks = {};
    let tasksOrder = [];

    //TASKS
    const taskCount = chance.integer({ min: 1, max: 1 });
    for (let k = 0; k < taskCount; k++) {
      const taskId = "task_" + taskIndex;

      tasks[taskId] = {
        id: taskId,
        title: chance.sentence({ words: 2 }),
        description: chance.sentence({ words: 10 }),
        imgSrc: "https://cs5-1.4pda.to/15791254.png"
      };
      tasksOrder.push(taskId);

      taskIndex++;
    }

    columns[columnId] = {
      id: columnId,
      title: chance.word({ length: 6 }),
      tasks: tasks,
      tasksOrder: tasksOrder
    };

    columnsOrder.push(columnId);

    columnIndex++;
  }

  rows[rowId] = {
    id: rowId,
    user: {
      name: chance.name({})
    },
    columns: columns,
    columnsOrder: columnsOrder
  };

  rowsOrder.push(rowId);
  rowIndex++;
}

testDataChance.rows = rows;
testDataChance.rowsOrder = rowsOrder;

export default testDataChance;
