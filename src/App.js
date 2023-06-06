import React from 'react';
import AnimatedRoutes from './Routes';
import Cursor from './Components/Cursor/Cursor';
import { BrowserRouter as Router } from 'react-router-dom';
import TopBar from './Components/TopBar/TopBar.js';

const App = () => {
  return (
    <>
      <Cursor />
      <Router>
        <TopBar />
        <AnimatedRoutes />
      </Router>
    </>
  );
};

export default App;
