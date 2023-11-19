export default function TaskCard({ title }) {
    return(
        <div className="card mb-2 bg-primary">
            <div className="card-body">
                <p className="card-text text-white">{ title }</p>
            </div>
        </div>
    )
}