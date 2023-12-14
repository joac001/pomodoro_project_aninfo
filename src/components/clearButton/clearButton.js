
export default function ClearButton() {
    function showWarning() {
        alert("HOLA");
    }

    return (
        <button type="button" class="btn btn-danger" onClick={() => showWarning()}>Danger</button>
    );
}