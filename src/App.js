import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'; // Import HashRouter instead of BrowserRouter
import MainPage from './MainPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </Router>
  );
}
