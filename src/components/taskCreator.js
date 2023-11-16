import TaskList from "./taskList";
import { useState } from "react";

export default function TaskCreator({createTask}) {
    // useState allows updates to the value of the input
    // and gets stored in the taskTitle variable
    const [taskTitle, setTaskTitle] = useState("");

    // handleSubmit is a function that gets called everytime the form is submitted
    // the stored value of taskTitle is used as the title for a new task
    // createTask function definition is on taskContainer component
    function handleSubmit(e) {
        e.preventDefault();
        createTask(taskTitle);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input id="task-name" placeholder="Enter a task name..." onChange={(e) => setTaskTitle(e.target.value)}/>
            <button id="add-task">Add Task</button>
        </form>
    );
}