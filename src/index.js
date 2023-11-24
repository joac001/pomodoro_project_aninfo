import React from 'react';
import ReactDOM from 'react-dom';

import './style/index.css';
import Timer from './components/timer';
import TaskContainer from './components/taskContainer';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>

    <Timer timer={{ pomodoro: 25, break: 5 }} />
    <TaskContainer />

  </React.StrictMode>
);
