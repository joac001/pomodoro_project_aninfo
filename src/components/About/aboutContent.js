import { useEffect, useState } from "react";

import '../../style/aboutSectionAnimations.css';

export default function AboutContent({ opened }) {

    const [pomodoroClassAnimation, setPomodoroClassAnimation] = useState('');
    const [breakClassAnimation, setBreakClassAnimation] = useState('');
    const [graphTextClassAnimation, setGraphTextClassAnimation] = useState('');

    useEffect(() => {
        if (opened) {
            setPomodoroClassAnimation('pomodoro');
            setBreakClassAnimation('break');
            setGraphTextClassAnimation('graph-text');
        }
    }, [opened]);


    return (
        <div className="about-content-container">
            <h5>A simple method to focus on any task.</h5>
            <hr />
            <span className="steps">
                <ol>
                    <li>
                        Plan your tasks.
                    </li>
                    <li>
                        Start focusing, 25 minutes.
                    </li>
                    <li>
                        Take a break.
                    </li>
                    <li>
                        Focus again.
                    </li>
                    <li>
                        Repeat.
                    </li>
                </ol>
            </span>

            <hr />

            <p>When you complete the 25 minutes focus step for the 4th time, you take a 15 minute break.</p>

            <span className="graphs-container">
                <span className="single-graph-container">
                    <div className={"one-" + pomodoroClassAnimation + " graph pomodoro-graph"}>
                        <span className={graphTextClassAnimation}>25 Minutes</span>
                    </div>
                    <div className={"one-" + breakClassAnimation + " graph graph-one-break"}>
                        <span className={graphTextClassAnimation}>5 Minutes</span>
                    </div>
                </span>

                <span className="single-graph-container">
                    <div className={"two-" + pomodoroClassAnimation + " graph pomodoro-graph"}>
                        <span className={graphTextClassAnimation}>25 Minutes</span>
                    </div>
                    <div className={"two-" + breakClassAnimation + " graph graph-one-break"}>
                        <span className={graphTextClassAnimation}>5 Minutes</span>
                    </div>
                </span>

                <span className="single-graph-container">
                    <div className={"three-" + pomodoroClassAnimation + " graph pomodoro-graph"}>
                        <span className={graphTextClassAnimation}>25 Minutes</span>
                    </div>
                    <div className={"three-" + breakClassAnimation + " graph graph-one-break"}>
                        <span className={graphTextClassAnimation}>5 Minutes</span>
                    </div>
                </span>

                <span className="single-graph-container">
                    <div className={"four-" + pomodoroClassAnimation + " graph pomodoro-graph"}>
                        <span className={graphTextClassAnimation}>25 Minutes</span>
                    </div>
                    <div className={"four-" + breakClassAnimation + " graph graph-two-break"}>
                        <span className={graphTextClassAnimation}>15 Minutes</span>
                    </div>
                </span>

            </span>
        </div>
    );
}