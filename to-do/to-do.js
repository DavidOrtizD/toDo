const fs = require('fs');
const colors = require('colors');

let listToDo = [];

/* Main Methods  */

const create = (description) => {
    loadDB();

    let toDo = {
        description,
        completed: false
    };

    listToDo.push(toDo);

    saveDB();

    return toDo;
};

const listTasks = () => {
    loadDB();
    for (const task of listToDo) {
        console.log("<==============>".green);
        console.log(`Task: ${task.description}`);
        console.log(`Completed: ${task.completed}`);
        console.log("<==============>".green);
    }
};

const updateTask = (description, completed = true) => {
    loadDB();

    const taskIndex = findTaskByDescription(description);

    if (taskIndex >= 0) {
        listToDo[taskIndex].completed = completed;

        saveDB();

        console.log("Task saved correctly.".green);
    } else {
        throw new Error("Task was not found.");
    }

};

const deleteTask = (description) => {
    loadDB();

    const taskIndex = findTaskByDescription(description);
    if (taskIndex >= 0) {
        listToDo.splice(taskIndex, 1);

        saveDB();

        console.log("Task successfully removed.".green);
    } else {
        throw new Error("Task was not found.")
    }
};

/* Utility methods */

const saveDB = () => {
    let data = JSON.stringify(listToDo);
    let resolve = "";
    fs.writeFile("db/data.json", data, (error) => {
        if (error) throw new Error(error);
    });
};

const loadDB = () => {
    try {
        listToDo = require("../db/data.json");
    } catch (error) {
        listToDo = [];
    }
};

const findTaskByDescription = (description) => {
    return listToDo.findIndex((task) => task.description === description);
};

module.exports = {
    create,
    listTasks,
    updateTask,
    deleteTask
}