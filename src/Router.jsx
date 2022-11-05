import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/common/Sidebar';
import Main from './pages/Main';
import Ad from './pages/Ad';

const Router = () => {
  return (
    <BrowserRouter>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/ad" element={<Ad />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
