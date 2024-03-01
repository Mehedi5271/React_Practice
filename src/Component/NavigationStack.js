// NavigationStack.js
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './home'; // Correct the import path

function NavigationStack() {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/*" element={<Navigate to="/home" />} />
      </Routes>
    </div>
  );
}

export default NavigationStack;
