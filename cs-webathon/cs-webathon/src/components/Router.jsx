import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Courses from './components/Courses';
import About from './components/About';
import Contact from './components/Contact';
import JitsiMeetWithNotepad from './components/JitsiMeetWithNotepad';

const RouterConfig = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/meet" element={<JitsiMeetWithNotepad />} />
      </Routes>
    </Router>
  );
};

export default RouterConfig;
