export default function TaskCard({ task, updateTaskCounter, deleteTask }) {

    // function updates the value of checked attribute of a single task
    // it subsequently requests an update in the counter value
    function toggleCheckbox(task) {
        if (!task.checked) task.checked = true;
        else task.checked = false;
        updateTaskCounter();
    }

    // when clicked, a checkbox changes it internal state and the counter updates
    // to conserve accuracy when deleting tasks, checkbox gets unchecked beforehand
    return (

        <div className="card-body">
            <div className="form-check">
                <input className="form-check-input" type="checkbox" 
                       checked={task.checked} onChange={() => toggleCheckbox(task)} />

                <label className="form-check-label">{ task.title }</label>
            </div>

            <span
                className="material-symbols-outlined icon-delete"
                id="inputGroup-sizing-default"
                onClick={() => {
                    if (task.checked) toggleCheckbox(task);
                    deleteTask(task);
                }}
            >
                delete
            </span>
        </div>

    );
}