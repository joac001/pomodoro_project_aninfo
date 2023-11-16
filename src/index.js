import React from 'react';
import ReactDOM from 'react-dom/client';

import './style/index.css';
import './style/tasks.css';
import TaskContainer from './components/taskContainer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TaskContainer/>
  </React.StrictMode>
);
