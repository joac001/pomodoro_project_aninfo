export default function TaskCard({ deleteTask, task }) {
    return (

        <div className="card-body">
            <div className="form-check">
                <input className="form-check-input" type="checkbox" />
                <label className="form-check-label">{ task.title }</label>
            </div>
            
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