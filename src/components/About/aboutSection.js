import { useState } from "react";

import AboutContent from './aboutContent.js'

import '../../style/aboutSection.css';

export default function AboutSection() {
    const [visibility, setVisibility] = useState('hide');
    const [sidebaropened, setSidebarOpened] = useState(false);

    return (
        <div className="about-container">

            <span className="material-symbols-outlined about-btn"
                onClick={() => {
                    setVisibility('show');
                    setSidebarOpened(true)
                }}>
                question_mark
            </span>

            <div className={"offcanvas offcanvas-end  text-bg-dark " + visibility} data-bs-target="##offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions" id="offcanvas" aria-labelledby="offcanvasLabel">

                <div className="offcanvas-header">
                    <span className="material-symbols-outlined close-offcanvas-btn" onClick={() => { setVisibility('hide') }}>
                        arrow_back
                    </span>

                    <h5 className="offcanvas-title" id="offcanvasLabel">What is pomodoro?</h5>
                </div>

                <div className="offcanvas-body">
                    <AboutContent opened={sidebaropened} />
                </div>


            </div>
        </div>
    );
}