import React, { Profiler } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './index.scss';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Profiler
      id='98217192'
      onRender={(e, b, c) => {
        console.log(c);
      }}
    >
      <App />
    </Profiler>
  </React.StrictMode>
);
