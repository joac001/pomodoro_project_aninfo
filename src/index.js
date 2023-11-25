import React from 'react';
import ReactDOM from 'react-dom/client';

import Timer from './components/Timer/timer.js'
import TaskContainer from './components/Task/taskContainer.js'

import './style/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>

    <Timer timer={{ pomodoro: 25, break: 5 }} />
    <TaskContainer />

  </React.StrictMode>
);
