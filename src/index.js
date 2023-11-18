import React from 'react';
import { createRoot } from 'react-dom/client';

import './style/index.css';
import './style/tasks.css';
import TaskContainer from './components/taskContainer';
import Timer from './components/timer'; // Adjust the import path

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>

    <Timer timer={{ pomodoro: 25 }} />
    <hr />
    <TaskContainer />

  </React.StrictMode>
);
