import React from 'react';
import './App.css';
import MetaMaskLogin from 'pages/MetaMaskLogin';
import MainPage from 'pages/MainPage';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<MetaMaskLogin />} />
        <Route path="/" element={<MainPage />} />
      </Routes>
    </Router>
  );
}

export default App;
