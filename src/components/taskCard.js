export default function TaskCard({ deleteTask, task }) {
    return(
        <div className="card mb-2 bg-primary">
            <div className="card-body">
                <p className="card-text text-white">{ task.title }</p>
                <button className="btn btn-light btn-delete" onClick={ () => deleteTask(task.id) }>
                    <span className="material-symbols-outlined" id="inputGroup-sizing-default">
                        delete
                    </span>
                </button>
            </div>
        </div>
    )
}