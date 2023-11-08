import React from 'react';
import ReactDOM from 'react-dom/client';

import "./components/componentExample";

import './style/index.css';
import ComponentExample from './components/componentExample';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ComponentExample />
  </React.StrictMode>
);
