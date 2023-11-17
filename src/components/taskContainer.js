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

    // the createTask function gets passed to TaskCreator to receive the taskTitle from the input
    // stored tasks are sent to tasklist to be displayed
    return <div id="task-container">
        <TaskCreator createTask={createTask}/>
        <TaskList tasks={tasks}/>
    </div>;
}