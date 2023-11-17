import React, { Component } from 'react';
import '../style/timer.css';

class Timer extends Component {
  constructor(props) {
    super(props);

    // Initial state
    this.state = {
      mode: 'Pomodoro',
      time: props.timer.pomodoro * 60, //Time in in seconds
      isRunning: false,
    };

    //Interval variable for updating the timer
    this.timerInterval = null;
  }

  stopTimer = () => {
    clearInterval(this.timerInterval);
    this.setState({ isRunning: false });
  };


  startTimer = () => {
    if (this.state.isRunning) return; //Locks the user for pressing start multiple times

    this.setState({ isRunning: true });

    this.timerInterval = setInterval(() => {
      this.setState((prevState) => ({
        time: prevState.time - 1,
      }));

      if (this.state.time <= 0) {
        this.stopTimer(); // Stop the timer when time reaches 0
        this.setState({ time: 0 })
      }

    }, 1000);
  };

  restartTimer = () => {

    this.stopTimer();
    this.setState({
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
          {
            <button onClick={this.startTimer} type="button" className="btn btn-light">
              <span class="material-symbols-outlined">
                play_arrow
              </span>
            </button>
          }
          {
            <button onClick={this.stopTimer} type="button" className="btn btn-light">
              <span class="material-symbols-outlined">
                pause
              </span>
            </button>
          }
          {
            <button onClick={this.restartTimer} type="button" className="btn btn-light">
              <span class="material-symbols-outlined">
                replay
              </span>
            </button>
          }
        </div>
      </div>
    );
  }
}

export default Timer;