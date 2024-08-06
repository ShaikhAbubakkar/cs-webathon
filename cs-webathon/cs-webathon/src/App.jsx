import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Courses from './components/Courses';
import About from './components/About';
import Contact from './components/Contact';
// import JitsiMeetWithNotepad from './components/JitsiMeetWithNotepad';

function App() {
  return (
    <div>
      <Header />
      <Home />
      <Courses />
      <About />
      <Contact />
    </div>
  );
}

export default App;