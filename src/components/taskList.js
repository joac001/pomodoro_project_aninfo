export default function TaskList({tasks}) {
    // initial state of tasklist component
    // when there's no tasks loaded
    if (tasks.length == 0) {
        return <div id="task-list">
            <p>No tasks added</p>
        </div>
    }

    // the map method allows for element creation and continuous updates with the given array
    // key property is needed to avoid a warning in the compiler
    return (
        <div id="task-list">
            {tasks.map((task) => (
                <p key={task.id} id="task-item">{task.title}</p>
            ))}
        </div>
    );
}