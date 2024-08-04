import React from "react";
import Header from "./components/home/Header";
import Home from "./components//home/Home";
import Container from "./components/home/Container";
import Courses from "./components/home/Courses";
import About from "./components/home/about";
import Contact from "./components/home/Contact";
import "./App.css"; // Global styles

const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <Container />
      <Courses />
      <About />
      <Contact />
    </div>
  );
};

export default App;
