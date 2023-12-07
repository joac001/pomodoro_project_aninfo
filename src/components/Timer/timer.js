import { Component, useEffect, useState } from 'react';
import '../../style/timer.css';

export default function Timer(props) {
  // localStorage.clear();

  let [timerMode, setTimerMode] = useState(localStorage.getItem("timerMode") ?? "Pomodoro");
  let [time, setTime] = useState(localStorage.getItem("time") ?? props.timer.pomodoro * 60);
  // let [isRunning, setIsRunning] = useState(localStorage.getItem("isRunning") ?? false);
  let [isRunning, setIsRunning] = useState(false);
  let [cycleCount, setCycleCount] = useState(localStorage.getItem("cycleCount") ?? 0);
  
  useEffect(() => {
    let timerInterval;

    localStorage.setItem("time", time);
    localStorage.setItem("timerMode", timerMode);
    localStorage.setItem("cycleCount", cycleCount);

    if (isRunning && time > 0) {
      timerInterval = setInterval(() => {
        setTime((time) => time - 1);
      }, 1000);
    }

    if (time == 0) {
      if (timerMode === "Pomodoro") {
        // change to break mode
        setTimerMode("Break");
        setTime(props.timer.break * 60);
        setCycleCount(count => count+1);

      } else {
        // change to pomodoro mode
        setTimerMode("Pomodoro");
        setTime(props.timer.pomodoro * 60);
      }
    }

    return () => clearInterval(timerInterval);
  }, [isRunning, time]);

  function playTimer() {
    setIsRunning(true);
  }

  function countDown() {
    // let newTime = time-1;

    if (time <= 0) {
      // switch modes
      if (timerMode === "Pomodoro") {
        // change to break mode
        setTimerMode("Break");
        // setTime(props.timer.break * 60);
        setTime(1 * 15);
        setCycleCount(count => count+1);

      } else {
        // change to pomodoro mode
        setTimerMode("Pomodoro");
        setTime(props.timer.pomodoro * 60);
      }
    } else {
      // timer is running
      console.log(time);
      // setTime(time => time-1);
      // time = time-1;
      console.log("DOWN");
      setTime((time) => time - 1);
    }
  }

  function pauseTimer() {
    // clearInterval(timerInterval);
    // timerInterval = null;
    setIsRunning(false);
    // localStorage.setItem("time", time);

  }

  function restartTimer() {
    // clearInterval(timerInterval);
    // timerInterval = null;
    setIsRunning(false);
    setTime(props.timer.pomodoro * 60);
    setTimerMode("Pomodoro");

    // localStorage.setItem("time", time);
  }

  return (
    <div className="timer-container">
      <div className="timer-mode">{timerMode}</div>
      <div className="timer-time">
        {Math.floor(time / 60)}:{(time % 60).toLocaleString('en-US', { minimumIntegerDigits: 2 })}
      </div>

      <span className="badge text-bg-success pomodoro-counter">
        Completed pomodoros: {cycleCount}
      </span>

      <div className="timer-buttons">
        <button onClick={playTimer} type="button" className="btn btn-light">
          <span className="material-symbols-outlined">play_arrow</span>
        </button>
        <button onClick={pauseTimer} type="button" className="btn btn-light">
          <span className="material-symbols-outlined">pause</span>
        </button>
        <button onClick={restartTimer} type="button" className="btn btn-light">
          <span className="material-symbols-outlined">replay</span>
        </button>
      </div>
    </div>
  );
}



// export default class Timer extends Component {
//   constructor(props) {
//     super(props);

//     // Initial state with Pomodoro mode, initial Pomodoro duration, and counter
//     this.state = JSON.parse(localStorage.getItem('timerState'));
//     if (!this.state) {
//       this.state = {
//         mode: 'Pomodoro',
//         time: props.timer.pomodoro * 60,
//         isRunning: false,
//         pomodoroCount: 0
//       };
//     };

//     // Interval variable for updating the timer
//     this.timerInterval = null;
//   }

//   save= (timerState) =>{
//     // creates a copy of the original timer state, sets the copy's isRunning value to false, and stores it
//     // upon refreshing, the timer will be paused, so buttons will work as intended
//     let copyState = { ...timerState };
//     copyState.isRunning = false;
//     localStorage.setItem('timerState', JSON.stringify(copyState));
//   };

//   stopTimer = () => {
//     clearInterval(this.timerInterval);
//     this.setState({ isRunning: false });
//     this.save(this.state);
//   };

//   startTimer = () => {
//     if (this.state.isRunning) return;

//     this.setState({ isRunning: true });

//     this.timerInterval = setInterval(() => {
//       this.setState((prevState) => ({
//         time: prevState.time - 1,
//       }));
//       if (this.state.time <= 0) {
//         this.stopTimer();
//         this.setState({ time: 0 });

//         if (this.state.mode === 'Pomodoro') {
//           // Increment the Pomodoro count after completing a Pomodoro session
//           this.setState((prevState) => ({
//             mode: 'Break',
//             time: this.props.timer.break * 60,
//             pomodoroCount: prevState.pomodoroCount + 1,
//           }));
//           this.startTimer();
//         } else {
//           // Reset to Pomodoro mode after the break
//           this.setState({
//             mode: 'Pomodoro',
//             time: this.props.timer.pomodoro * 60,
//           });
//         }
//       }
//       this.save(this.state);
//     }, 1000);
//   };

//   restartTimer = () => {
//     this.stopTimer();
//     this.setState({
//       mode: 'Pomodoro',
//       time: this.props.timer.pomodoro * 60,
//       isRunning: false,
//     });
//   };

//   render() {
//     const { mode, time, pomodoroCount } = this.state;

//     return (
//       <div className="timer-container">
//         <div className="timer-mode">{mode}</div>
//         <div className="timer-time">
//           {Math.floor(time / 60)}:{(time % 60).toLocaleString('en-US', { minimumIntegerDigits: 2 })}
//         </div>

//         <span className="badge text-bg-success pomodoro-counter">
//           Completed pomodoros: {pomodoroCount}
//         </span>

//         <div className="timer-buttons">
//           <button onClick={this.startTimer} type="button" className="btn btn-light">
//             <span className="material-symbols-outlined">play_arrow</span>
//           </button>
//           <button onClick={this.stopTimer} type="button" className="btn btn-light">
//             <span className="material-symbols-outlined">pause</span>
//           </button>
//           <button onClick={this.restartTimer} type="button" className="btn btn-light">
//             <span className="material-symbols-outlined">replay</span>
//           </button>
//         </div>
//       </div>
//     );
//   }
// }