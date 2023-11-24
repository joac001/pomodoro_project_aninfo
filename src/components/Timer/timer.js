import { useState } from 'react';

import '../../style/timer.css';

export default function Timer({ pomodoroTime, breakTime }) {

  const [mode, setMode] = useState('Pomodoro');
  const [time, setTime] = useState(pomodoroTime * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [pomodoroCount, setPomodoroCount] = useState(0);
  // Interval variable for updating the timer
  const [timerInterval, setTimerInterval] = useState();



  function stopTimer() {
    setIsRunning(false);
    clearInterval(timerInterval);
  }

  function startTimer() {
    if (isRunning) return;
    setIsRunning(true);

    const newInterval = setInterval(() => {

      setTime(time - 1);

      if (time <= 0) {
        stopTimer();
        setTime(0);

        if (mode === 'Pomodoro') {
          // Increment the Pomodoro count after completing a Pomodoro session
          setMode('Break');
          setTime(breakTime * 60);
          setPomodoroCount(pomodoroCount + 1);

          startTimer();

        } else {
          // Reset to Pomodoro mode after the break
          setMode('Pomodoro');
          setTime(pomodoroTime * 60);
        }
      }

    }, 1000);

    setTimerInterval(newInterval);
  }

  function restartTimer() {
    stopTimer();

    setMode('Pomodoro');
    setTime(pomodoroTime * 60);
  }

  return (
    <div className="timer-container">
      <div className="timer-mode">{mode}</div>
      <div className="timer-time">
        {Math.floor(time / 60)}:{(time % 60).toLocaleString('en-US', { minimumIntegerDigits: 2 })}
      </div>


      <span className="badge text-bg-success pomodoro-counter">
        Completed pomodoros: {pomodoroCount}
      </span>


      <div className="timer-buttons">
        <button onClick={startTimer} type="button" className="btn btn-light">
          <span className="material-symbols-outlined">play_arrow</span>
        </button>
        <button onClick={stopTimer} type="button" className="btn btn-light">
          <span className="material-symbols-outlined">pause</span>
        </button>
        <button onClick={restartTimer} type="button" className="btn btn-light">
          <span className="material-symbols-outlined">replay</span>
        </button>
      </div>
    </div>
  );

}