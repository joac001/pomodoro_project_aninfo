import TaskCard from "./taskCard";

export default function TaskList({ deleteTask, tasks }) {
    return (
        // initial state of taskList component with no tasks to display
        TaskList.length === 0 ?
            <div id="task-list">
                <p className="no-task-added">No tasks added</p>
            </div>
            :
            // the map method allows for element creation iterating on the given array
            // key property is needed to avoid a specific compiler warning, is determined by the array's length
            <div id="task-list">
                {
                    tasks.map(
                        (task) => <TaskCard deleteTask={deleteTask} key={task.id} task={task} />
                    )
                }
            </div>
    );
}