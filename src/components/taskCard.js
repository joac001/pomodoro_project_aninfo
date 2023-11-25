import { useState } from "react";

export default function TaskCard({ updateTaskCounter, deleteTask, task }) {

    function toggleCheckbox(task) {
        if (!task.checked) {
            task.checked = true;
            // alert("CHANGE")
        }
        else task.checked = false;
        updateTaskCounter();
    }

    return (

        <div className="card-body">
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value={task.checked} onClick={() => toggleCheckbox(task)}  />

                <label className="form-check-label">{ task.title }</label>
            </div>
            {/* <p className="task-title">{task.title}</p> */}
            <span
                className="material-symbols-outlined icon-delete"
                id="inputGroup-sizing-default"
                onClick={() => deleteTask(task.id)}
            >
                delete
            </span>
        </div>

    );
}