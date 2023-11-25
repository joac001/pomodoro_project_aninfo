export default function TaskCard({ deleteTask, task }) {
    return (

        <div className="card-body">
            <p>{task.title}</p>
            <span
                className="material-symbols-outlined icon-delete"
                id="inputGroup-sizing-default"
                onClick={
                    () => deleteTask(task.id)
                }
            >
                delete
            </span>
        </div>

    );
}