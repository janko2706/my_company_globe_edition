import React from 'react';
import AnimatedRoutes from './Routes';
import Cursor from './Components/Cursor/Cursor';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from './Components/Navigation/Navigation';

const App = () => {
  return (
    <>
      <Cursor />
      <Router>
        <Navigation />
        <AnimatedRoutes />
      </Router>
    </>
  );
};

export default App;
