import { useEffect, useState } from "react";
import TaskCard from "./taskCard";

export default function TaskList({ deleteTask, tasks }) {
    

    let [checkedBoxes, setCheckedBoxes] = useState(0);

    function updateTaskCounter() {
        setCheckedBoxes(tasks.filter(task => task.checked == true).length);
    }

    // initial state of taskList component with no tasks to display
    if (tasks.length == 0) {
        return <div id="task-list">
            <p className="no-task-added">No tasks added</p>
        </div>
    }
    
    // function checkTask(task) {
    //     // if (task.checked) {
    //     //     setCompletedTasks(completedTasks+1);
    //     //     return;
    //     // }
    //     checkedBoxes++;

    // }
    // useEffect(() => {
    //     console.log("update");
    //     setCheckedBoxes(tasks.filter(task => task.checked == true).length);
    //     // tasks.filter(task => task.id != taskId);
    // }, [tasks]);

    // the map method allows for element creation iterating on the given array
    // key property is needed to avoid a specific compiler warning, is determined by the array's length
    return (
        <div id="task-list">
            <p className="no-task-added">{ checkedBoxes }/{ tasks.length }</p>
            {tasks.map((task) => (
                <TaskCard updateTaskCounter={updateTaskCounter} deleteTask={deleteTask} key={task.id} task={task} />
            ))}
        </div>
    );
}