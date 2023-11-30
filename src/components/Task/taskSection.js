import { useState } from "react";

import TaskContainer from './taskContainer.js';

const hamburgerIcon = "\u2630";

export default function TaskSection() {
    const [visibility, setVisibility] = useState('hide');
    const [sidebaropened, setSidebarOpened] = useState(false);

    return (
        <div className="sidebar-tasks-container">

            <span className="material-symbols-outlined about-btn"
                onClick={() => {
                    setVisibility('show');
                    setSidebarOpened(true)
                }}>
                {hamburgerIcon}
            </span>

            <div className={"offcanvas offcanvas-start  text-bg-dark " + visibility} data-bs-target="##offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions" id="offcanvas" aria-labelledby="offcanvasLabel">

                <div className="offcanvas-header">
                    <span className="material-symbols-outlined close-offcanvas-btn" onClick={() => { setVisibility('hide') }}>
                        x
                    </span>

                    <h5 className="offcanvas-title" id="offcanvasLabel">To do list</h5>
                </div>

                <div className="offcanvas-body">
                    <TaskContainer opened={sidebaropened} />
                </div>


            </div>
        </div>
    );
}