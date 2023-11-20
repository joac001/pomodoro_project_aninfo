import React, { Component } from 'react';
import '../style/timer.css';

class Timer extends Component {
  constructor(props) {
    super(props);

    // Initial state
    this.state = {
      mode: 'Pomodoro',
      time: props.timer.pomodoro * 60, // Time in seconds
      isRunning: false,
    };

    // Interval variable for updating the timer
    this.timerInterval = null;
  }

  stopTimer = () => {
    clearInterval(this.timerInterval);
    this.setState({ isRunning: false });
  };

  startTimer = () => {
    //if (this.state.isRunning) return;

    this.setState({ isRunning: true });

    this.timerInterval = setInterval(() => {
      this.setState((prevState) => ({
        time: prevState.time - 1,
      }));

      if (this.state.time <= 0) {
        this.stopTimer();

        if (this.state.mode === 'Pomodoro') {
          // Start the break timer after a Pomodoro session
          this.setState({
            mode: 'Break',
            time: this.props.timer.break * 60,
          });
          this.startTimer();
        } else {
          // Reset to Pomodoro mode after the break
          this.setState({
            mode: 'Pomodoro',
            time: this.props.timer.pomodoro * 60,
          });
          this.stopTimer();
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
    const { mode, time } = this.state;

    return (
      <div className="timer-container">
        <div className="timer-mode">{mode}</div>
        <div className="timer-time">
          {Math.floor(time / 60)}:{(time % 60).toLocaleString('en-US', { minimumIntegerDigits: 2 })}
        </div>
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