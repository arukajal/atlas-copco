import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Test from './pages/Test';
import ManageRules from './pages/ManageRules';
import Settings from './pages/Settings';

function Routing() {
  return (
      <Routes>
        <Route path="/" element={< Dashboard/>} />
        <Route path="/test" element={<Test />} />
        <Route path="/manage-rules" element={<ManageRules />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
  );
}

export default Routing;
