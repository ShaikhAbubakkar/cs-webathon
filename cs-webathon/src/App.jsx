import React from "react";
import Header from "./components/home/Header";
import Home from "./components/home/Home";
import Container from "./components/home/Container";
import Courses from "./components/home/Courses";
import Contact from "./components/home/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Container />
      <Courses />
      <About />
      <Contact />
    </div>
  );
}

export default App;
