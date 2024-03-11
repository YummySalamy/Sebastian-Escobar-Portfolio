// Code for the main App component
import React from 'react'
import LandingPage from './pages/LandingPage';
import MyProjects from './pages/MyProjects';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import FullLayout from './layouts/FullLayout';
import './App.css'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<FullLayout children={<LandingPage />} />} />
        <Route path="/projects" element={<FullLayout children={<MyProjects />} />} />
        <Route path="/contact" element={<FullLayout children={<Contact />} />} />
        <Route path="/resume" element={<FullLayout children={<Resume />} />} />
      </Routes>
    </Router>
  )
}

export default App
