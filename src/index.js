import React from 'react';
import ReactDOM from 'react-dom/client';

import Timer from './components/Timer/timer.js';
import TaskContainer from './components/Task/taskSection.js';
import AboutSection from './components/About/aboutSection.js';

import './style/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>


    <TaskContainer />

    <Timer timer={{ pomodoro: 25, break: 5 }} />

    <AboutSection />

  </React.StrictMode>
);
