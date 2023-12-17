
import '../../style/clearButton.css'

export default function ClearButton() {
    function showWarning() {
        let gotAResponse = false;
        while (!gotAResponse) {
            let response =
                prompt('Warning. You are about to delete all your progress and saved tasks. Do you want to continue? (type "Y" for yes or "N" for no)');

            if (response === 'y' || response === 'Y') {
                localStorage.clear();
                window.location.reload();

                gotAResponse = true;
            } else if (response === 'n' || response === 'N' || response === null) {
                gotAResponse = true;
            }
        }
        gotAResponse = false;
    }

    return <button type="button" className="btn btn-danger clear-storage-btn" onClick={() => showWarning()}>Delete saved info</button>;
}