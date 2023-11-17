import React from 'react';
import ReactDOM from 'react-dom';

import './style/index.css';
import './style/tasks.css';
import TaskContainer from './components/taskContainer';
import Timer from './components/timer'; // Adjust the import path

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <div>
      <Timer timer={{ pomodoro: 25 }} />
    </div>
    <TaskContainer />
  </React.StrictMode>
);
