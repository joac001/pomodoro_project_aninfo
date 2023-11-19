import TaskList from "./taskList";
import { useState } from "react";

export default function TaskCreator({ createTask }) {
    // useState allows updates to the value of the input
    // taskTitle variable is updated via setTaskTitle function
    const [taskTitle, setTaskTitle] = useState("");

    // handleSubmit is a function that gets called everytime the form is submitted
    // the stored value of taskTitle is used as the title for a new task
    // createTask function definition is on taskContainer component
    function handleSubmit(e) {
        e.preventDefault();
        createTask(taskTitle);
        setTaskTitle("");
    }

    // upon changing, the value of the input gets stored in taskTitle with setTaskTitle
    return (
        <form onSubmit={handleSubmit} className="task-form">

            <input
                type="text"
                className="form-control"

                id="task-name"
                placeholder="Enter a task name..."
                onChange={(e) => setTaskTitle(e.target.value)}
                value={taskTitle} />

            <button className="btn btn-secondary btn-add" id="add-task" disabled={taskTitle.trim().length == 0}>
                <span className="material-symbols-outlined" id="inputGroup-sizing-default">
                    add
                </span>
            </button>

        </form>
    );
}