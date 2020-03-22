const updateOptions = {
    description: {
        demand: true,
        alias: "d"
    },
    completed: {
        alias: "c",
        default: true
    }
};

const createOptions = {
    description: {
        demand: true,
        alias: "d"
    }
};

const args = require('yargs').command("create", "Create a new task with the given description.", createOptions)
    .command("update", "Update the task that match the description provided.", updateOptions)
    .command("delete", "Delete the task that match the description provided.", createOptions)
    .help()
    .argv;

module.exports = {
    args
};