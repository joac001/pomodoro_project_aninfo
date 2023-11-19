export default function TaskCard({ deleteTask, task }) {
    return(
        <div className="card mb-2 bg-primary">
            <div className="card-body">
                <p className="card-text text-white">{ task.title }</p>
                <button onClick={ () => deleteTask(task.id) }>Delete Task</button>
            </div>
        </div>
    )
}