import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Login from './pages/Login';
import Wellcome from './pages/Wellcome';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/contact" element={<Wellcome />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
