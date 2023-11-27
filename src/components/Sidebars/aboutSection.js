import { useState } from "react";

import '../../style/aboutSection.css';

export default function AboutSection() {
    const [visibility, setVisibility] = useState('hide');


    return (
        <div className="about-container">

            <span className="material-symbols-outlined about-btn" onClick={() => { setVisibility('show') }}>
                question_mark
            </span>

            <div className={"offcanvas offcanvas-end " + visibility} id="offcanvas" aria-labelledby="offcanvasLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasLabel">Offcanvas</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" onClick={() => { setVisibility('hide') }}></button>
                </div>
                <div className="offcanvas-body">
                    Content for the offcanvas goes here. You can place just about any Bootstrap component or custom elements here.
                </div>
            </div>
        </div>
    );
}