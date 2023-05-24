import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import FrontPage from './Pages/FrontPage/FrontPage';
import { AnimatePresence } from 'framer-motion';
const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode='wait'>
      <Routes key={location.pathname} location={location}>
        <Route path='*' element={<FrontPage />} />
        <Route path='/' element={<FrontPage />} />
        {/* <Route path='/about' element={<About />} /> */}
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
