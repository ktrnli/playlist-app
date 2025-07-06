import React, { StrictMode } from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import './root.css';
import Main from './Main.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);