import TaskCreator from "./taskCreator";
import TaskList from "./taskList";
// import {tasks as data} from "./tasks"
import { useState, useEffect } from "react";

export default function TaskContainer() {
    // useState allows updates to the tasks array via setTasks
    // the array holds all the added tasks of the current session, starts as empty array
    const [tasks, setTasks] = useState([]);

    // useEffect is used to set a predefined value of the tasks array
    // called once on page load, then on every subsequent update to tasks
    // will use when implementing local storage
    // useEffect(() => {
    //     console.log("update");
    //     setTasks(data);
    // }, [data]);

    // createTask is a function to add a new task to tasks, given a taskTitle
    // not called here because of the tasks array intended scope
    // a single task contains a unique id and the title
    function createTask(taskTitle) {
        setTasks([...tasks, {
            id: tasks.length,
            title: taskTitle
        }]);
    }

    // deleteTask receives a taskId from the card the pressed button belongs to
    // it creates a copy of the tasks array, filtering out the element with the provided id
    // before overwriting the tasks array, it reassigns the ids to avoid key conflicts
    function deleteTask(taskId) {
        let newTasks = tasks.filter(task => task.id != taskId);
        for (let i = 0; i < newTasks.length; i++) {
            newTasks[i].id = i;
        }
        setTasks(newTasks);
    }

    // the createTask function gets passed to TaskCreator to receive the taskTitle from the input
    // stored tasks are sent to tasklist to be displayed
    // deleteTask gets passed to every TaskCard to handle each removal
    return <div id="task-container">
        <TaskCreator createTask={createTask} />
        <TaskList deleteTask={deleteTask} tasks={tasks} />
    </div>;
}