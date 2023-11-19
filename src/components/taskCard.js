export default function TaskCard({ title }) {
    return(
        <div className="card mb-2 bg-primary">
            <div className="card-body">
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" />
                    <label className="form-check-label">{ title }</label>
                </div>
            </div>
        </div>
    )
}