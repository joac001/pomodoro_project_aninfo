import { useState } from "react";

import TaskContainer from './taskContainer.js';

import '../../style/taskSection.css'

export default function TaskSection() {
    const [visibility, setVisibility] = useState('hide');
    const [sidebaropened, setSidebarOpened] = useState(false);
    const [hover, setHover] = useState('');

    return (
        <div className="tasks-sidebar-container">
            <span className="material-symbols-outlined task-sidebar-btn"
                onMouseEnter={() => setHover('_open')}
                onMouseLeave={() => setHover('')}
                onClick={() => {
                    setVisibility('show');
                    setSidebarOpened(true);
                }
                }
            >
                {'menu' + hover}
            </span>

            <div className={"offcanvas offcanvas-start  text-bg-dark " + visibility} data-bs-target="##offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions" id="offcanvas" aria-labelledby="offcanvasLabel">

                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasLabel">To do list</h5>

                    <span className="material-symbols-outlined close-offcanvas-btn"
                        onClick={() => { setVisibility('hide') }}
                    >
                        close
                    </span>

                </div>

                <div className="offcanvas-body task-sidebar-content-container">
                    <TaskContainer opened={sidebaropened} />
                </div>


            </div>
        </div >
    );
}