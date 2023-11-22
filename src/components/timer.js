import React, { Component } from 'react';
import '../style/timer.css';

class Timer extends Component {
  constructor(props) {
    super(props);

    // Initial state with Pomodoro mode, initial Pomodoro duration, and counter
    this.state = {
      mode: 'Pomodoro',
      time: props.timer.pomodoro * 60, // Time in seconds for Pomodoro
      isRunning: false,
      pomodoroCount: 0,
    };

    // Interval variable for updating the timer
    this.timerInterval = null;
  }

  stopTimer = () => {
    clearInterval(this.timerInterval);
    this.setState({ isRunning: false });
  };

  startTimer = () => {
    if (this.state.isRunning) return;

    this.setState({ isRunning: true });

    this.timerInterval = setInterval(() => {
      this.setState((prevState) => ({
        time: prevState.time - 1,
      }));

      if (this.state.time <= 0) {
        this.stopTimer();
        this.setState({ time: 0 });

        if (this.state.mode === 'Pomodoro') {
          // Increment the Pomodoro count after completing a Pomodoro session
          this.setState((prevState) => ({
            mode: 'Break',
            time: this.props.timer.break * 60,
            pomodoroCount: prevState.pomodoroCount + 1,
          }));
          this.startTimer();
        } else {
          // Reset to Pomodoro mode after the break
          this.setState({
            mode: 'Pomodoro',
            time: this.props.timer.pomodoro * 60,
          });
        }
      }
    }, 1000);
  };

  restartTimer = () => {
    this.stopTimer();
    this.setState({
      mode: 'Pomodoro',
      time: this.props.timer.pomodoro * 60,
      isRunning: false,
    });
  };

  render() {
    const { mode, time, pomodoroCount } = this.state;

    return (
      <div className="timer-container">
        <div className="timer-mode">{mode}</div>
        <div className="timer-time">
          {Math.floor(time / 60)}:{(time % 60).toLocaleString('en-US', { minimumIntegerDigits: 2 })}
        </div>
        <div className="pomodoro-counter">Completed pomodoros: {pomodoroCount}</div>
        <div className="timer-buttons">
          <button onClick={this.startTimer} type="button" className="btn btn-light">
            <span className="material-symbols-outlined">play_arrow</span>
          </button>
          <button onClick={this.stopTimer} type="button" className="btn btn-light">
            <span className="material-symbols-outlined">pause</span>
          </button>
          <button onClick={this.restartTimer} type="button" className="btn btn-light">
            <span className="material-symbols-outlined">replay</span>
          </button>
        </div>
      </div>
    );
  }
}

export default Timer;