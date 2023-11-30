import { useState } from "react";
import TaskCard from "./taskCard";

export default function TaskList({ deleteTask, tasks }) {

    // checkedBoxes stores the number of tasks currently checked
    // gets updated when clicking a single checkbox, from updateTaskCounter function
    let [checkedBoxes, setCheckedBoxes] = useState(0);

    function updateTaskCounter() {
        setCheckedBoxes(tasks.filter(task => task.checked === true).length);
    }

    return (
        // initial state of taskList component with no tasks to display
        tasks.length === 0 ?
            <div id="task-list">
                <p className="no-task-added">No tasks added</p>
            </div>
            :
            // the map method allows for element creation iterating on the given array
            // key property is needed to avoid a specific compiler warning, is determined by the array's length
            <div id="task-list">
                <div className="scrollable-task-list">
                    {
                        tasks.map(
                            (task) => <TaskCard key={task.id} task={task} updateTaskCounter={updateTaskCounter} deleteTask={deleteTask} />
                        )
                    }
                </div>

                <p className="no-task-added">Completed Tasks: {checkedBoxes}/{tasks.length}</p>

            </div>
    );
}