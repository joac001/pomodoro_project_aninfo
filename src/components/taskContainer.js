import TaskCreator from "./taskCreator";
import TaskList from "./taskList";
import {tasks as data} from "./tasks"
import { useState, useEffect } from "react";

export default function TaskContainer() {
    // useState is invoked to update the value of
    // array tasks with function setTasks
    const [tasks, setTasks] = useState([]);

    // useEffect is used to set the value of array tasks
    // (first time the website is loaded) ??
    useEffect(() => {
        setTasks(data);
    }, []);

    function createTask(taskTitle) {
        setTasks([...tasks, {
            id: tasks.length,
            title: taskTitle
        }]);
    }

    return <div id="task-container">
        <TaskCreator createTask={createTask}/>
        <TaskList tasks={tasks}/>
    </div>;
}