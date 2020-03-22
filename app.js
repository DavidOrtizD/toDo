const argv = require('./config/yargs').args;
const { create, listTasks, updateTask, deleteTask } = require('./to-do/to-do');

let command = argv._[0];

switch (command) {
    case "create":
        console.log(create(argv.description));
        break;

    case "list":
        listTasks();
        break;

    case "update":
        updateTask(argv.description, argv.completed);
        break;
    case "delete":
        deleteTask(argv.description);
        break;

    default:
        console.log("Unknown Command.");

}